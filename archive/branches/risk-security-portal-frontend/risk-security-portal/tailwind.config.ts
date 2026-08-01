import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#020817',
        panel: '#061524',
        panel2: '#071b2d',
        line: 'rgba(148, 163, 184, 0.16)',
        neon: '#2f8cff',
        violet: '#6d42e8',
        green: '#22c55e',
        amber: '#f59e0b',
        danger: '#ef4444'
      },
      boxShadow: {
        glow: '0 0 30px rgba(47, 140, 255, 0.18)',
        violet: '0 0 26px rgba(109, 66, 232, 0.32)'
      }
    }
  },
  plugins: []
};

export default config;
