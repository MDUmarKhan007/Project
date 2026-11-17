import { useState } from 'react';
import type { FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, MessageSquare, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Section from '@/components/Section';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    else if (form.name.trim().length > 120) e.name = 'Name is too long (max 120 characters).';

    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!EMAIL_RE.test(form.email.trim())) e.email = 'Please enter a valid email address.';

    if (!form.message.trim()) e.message = 'Please enter a message.';
    else if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
    else if (form.message.trim().length > 5000) e.message = 'Message is too long (max 5000 characters).';

    return e;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setErrorMsg(
        /rate limit|timeout|network|fetch/i.test(message)
          ? 'Network issue — please check your connection and try again.'
          : 'Could not send your message right now. Please try again later.',
      );
    }
  }

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
      if (status === 'success' || status === 'error') setStatus('idle');
    },
  });

  return (
    <Section
      id="contact"
      eyebrowIcon={<MessageSquare size={14} />}
      eyebrow="Get in Touch"
      title={
        <>
          Let&apos;s build something <span className="gradient-text">together</span>
        </>
      }
      lead="Have a project in mind or just want to say hi? Send a message and I'll get back to you."
      className="border-t border-white/5"
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Info side */}
        <div className="reveal space-y-4">
          <div className="card card-hover group p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-electric-500/20 to-grape-500/20 text-electric-300 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110">
              <Mail size={20} />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-white">Email</h3>
            <p className="mt-1 text-sm text-slate-400">
              Reach out directly at{' '}
              <a
                href="mailto:youremail@example.com"
                className="text-electric-300 underline-offset-4 hover:underline"
              >
                youremail@example.com
              </a>
            </p>
            <p className="mt-1 text-xs text-slate-500">Replace with your real email address.</p>
          </div>

          <div className="card card-hover group p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-grape-500/20 to-electric-500/20 text-grape-300 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110">
              <MessageSquare size={20} />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-white">Responses</h3>
            <p className="mt-1 text-sm text-slate-400">
              I usually reply within a couple of days. Messages are stored securely
              and only used to get back to you.
            </p>
          </div>
        </div>

        {/* Form side */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="reveal card group relative overflow-hidden p-6 sm:p-8"
          aria-label="Contact form"
        >
          <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-electric-400 to-grape-400 transition-transform duration-500 group-focus-within:scale-x-100" />
          <div className="grid gap-5">
            <Field
              id="name"
              label="Name"
              icon={<User size={16} />}
              error={errors.name}
              {...field('name')}
              placeholder="Your name"
              autoComplete="name"
            />

            <Field
              id="email"
              type="email"
              label="Email"
              icon={<Mail size={16} />}
              error={errors.email}
              {...field('email')}
              placeholder="you@example.com"
              autoComplete="email"
            />

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="input-field resize-y"
                placeholder="Tell me about your project or message..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                {...field('message')}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300">
                  <AlertCircle size={13} /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div
                role="status"
                className="flex items-start gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-200"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Message sent successfully.</p>
                  <p className="mt-0.5 text-emerald-200/80">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div
                role="alert"
                className="flex items-start gap-3 rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-sm text-rose-200"
              >
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Couldn&apos;t send your message.</p>
                  <p className="mt-0.5 text-rose-200/80">{errorMsg}</p>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  icon,
  error,
  type = 'text',
  placeholder,
  autoComplete,
  ...rest
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
          {icon}
        </span>
        <input
          id={id}
          type={type}
          className="input-field pl-10"
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300">
          <AlertCircle size={13} /> {error}
        </p>
      )}
    </div>
  );
}
