/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#03060f',
          900: '#070b18',
          850: '#0a1022',
          800: '#0e1530',
          700: '#141d3d',
          600: '#1c274e',
        },
        electric: {
          50: '#eaf2ff',
          100: '#d2e6ff',
          200: '#a6cdff',
          300: '#6fa9ff',
          400: '#3d85ff',
          500: '#1a63f5',
          600: '#0f48d1',
          700: '#0b37a3',
          800: '#0a2d82',
          900: '#0a2768',
        },
        grape: {
          300: '#c9a3ff',
          400: '#a872ff',
          500: '#8b4dff',
          600: '#7a2ff0',
          700: '#6920cc',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(63,131,255,0.25), 0 18px 60px -15px rgba(63,131,255,0.45)',
        grape: '0 0 0 1px rgba(139,77,255,0.25), 0 18px 60px -15px rgba(139,77,255,0.45)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(63,131,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(63,131,255,0.06) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(900px circle at 20% 0%, rgba(63,131,255,0.18), transparent 45%), radial-gradient(700px circle at 85% 20%, rgba(139,77,255,0.18), transparent 45%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '100%': { transform: 'rotate(-360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'pulse-soft': {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'border-glow': {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        'spin-reverse': 'spin-reverse 28s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'border-glow': 'border-glow 5s ease-in-out infinite',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
};
