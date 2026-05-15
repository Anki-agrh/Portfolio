/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // We'll use the 'dark' class applied to html tag
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', '"Segoe UI"', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      colors: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        dot: 'var(--bg-dot)',
        glass: {
          bg: 'var(--glass-bg)',
          border: 'var(--glass-border)',
          shadow: 'var(--glass-shadow)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          rose: 'var(--accent-rose)',
          'rose-soft': 'var(--accent-rose-soft)',
          lavender: 'var(--accent-lavender)',
          'lavender-vivid': 'var(--accent-lavender-vivid)',
          butter: 'var(--accent-butter)',
          'butter-vivid': 'var(--accent-butter-vivid)',
          sage: 'var(--accent-sage)',
          'sage-vivid': 'var(--accent-sage-vivid)',
          plum: 'var(--accent-plum)',
          latte: 'var(--accent-latte)',
        },
        washi: {
          pink: 'var(--washi-pink)',
          lavender: 'var(--washi-lavender)',
        },
        polaroid: {
          bg: 'var(--polaroid-bg)',
          shadow: 'var(--polaroid-shadow)',
        }
      },
      boxShadow: {
        glass: '0 4px 20px var(--glass-shadow)',
        'glass-hover': 'var(--card-hover-lift)',
        polaroid: '0 8px 30px var(--polaroid-shadow)',
      },
      animation: {
        'float': 'floatSoft 4s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
