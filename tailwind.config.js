/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        departure: ['DepartureMono', 'Roboto Mono', 'monospace'],
        chakra: ['ChakraPetch', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        accent: '#fafa0f',
        zinc: {
          850: '#1f1f22',
          900: '#18181b',
          925: '#101012',
          950: '#050505',
        }
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        widest: '0.15em',
      },
      spacing: {
        'section': 'var(--section-spacing)',
      },
      cursor: {
        none: 'none',
      }
    }
  },
  plugins: [],
}