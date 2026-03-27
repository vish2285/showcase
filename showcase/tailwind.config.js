/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050810',
        'deep-panel': '#0A0F1E',
        panel: '#0F1629',
        'elevated-panel': '#141C35',
        'border-subtle': '#1E2A45',
        'border-active': '#2A3F6F',
        'cyan-primary': '#00D4FF',
        'cyan-dim': '#00A8CC',
        'violet-primary': '#7B61FF',
        'violet-dim': '#5A45CC',
        'green-terminal': '#00FF88',
        'text-primary': '#E8EDF7',
        'text-secondary': '#7A8BA8',
        'text-muted': '#3D4F6B',
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        blink: 'blink 1s step-end infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'signal': 'signal 3s linear infinite',
        'drift-1': 'drift1 20s ease-in-out infinite',
        'drift-2': 'drift2 25s ease-in-out infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        pulseGlow: {
          '0%,100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift1: {
          '0%,100%': { transform: 'translate(0,0)' },
          '33%': { transform: 'translate(30px,-20px)' },
          '66%': { transform: 'translate(-20px,15px)' },
        },
        drift2: {
          '0%,100%': { transform: 'translate(0,0)' },
          '33%': { transform: 'translate(-25px,20px)' },
          '66%': { transform: 'translate(20px,-15px)' },
        },
      },
    },
  },
  plugins: [],
}
