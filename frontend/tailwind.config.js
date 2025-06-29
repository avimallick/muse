/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        retro: ['Orbitron', 'monospace'],
        display: ['Orbitron', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        // Brand specific colors
        'electric-blue': 'rgb(46, 91, 218)',
        'sunshine-yellow': 'rgb(244, 229, 66)',
        'coral-red': 'rgb(231, 76, 60)',
        'sage-green': 'rgb(127, 190, 170)',
        'soft-pink': 'rgb(248, 200, 200)',
        'cream-white': 'rgb(245, 242, 232)',
        'deep-navy': 'rgb(26, 35, 126)',
        'warm-orange': 'rgb(255, 107, 53)',
        'grid-gray': 'rgb(224, 213, 213)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'retro-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(46, 91, 218, 0.7)',
          },
          '50%': { 
            boxShadow: '0 0 0 10px rgba(46, 91, 218, 0)',
          },
        },
        'retro-bounce': {
          '0%, 20%, 53%, 80%, 100%': {
            transform: 'translate3d(0,0,0)',
          },
          '40%, 43%': {
            transform: 'translate3d(0, -8px, 0)',
          },
          '70%': {
            transform: 'translate3d(0, -4px, 0)',
          },
          '90%': {
            transform: 'translate3d(0, -2px, 0)',
          },
        },
        'retro-glow': {
          '0%, 100%': {
            textShadow: `
              0 0 5px rgba(244, 229, 66, 0.5),
              0 0 10px rgba(244, 229, 66, 0.3),
              0 0 15px rgba(244, 229, 66, 0.2)
            `,
          },
          '50%': {
            textShadow: `
              0 0 10px rgba(244, 229, 66, 0.8),
              0 0 20px rgba(244, 229, 66, 0.5),
              0 0 30px rgba(244, 229, 66, 0.3)
            `,
          },
        },
        'retro-float': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'retro-pulse': 'retro-pulse 2s infinite',
        'retro-bounce': 'retro-bounce 1s ease infinite',
        'retro-glow': 'retro-glow 2s ease-in-out infinite',
        'retro-float': 'retro-float 20s ease-in-out infinite',
      },
      boxShadow: {
        'retro': '6px 6px 0px rgb(224, 213, 213)',
        'retro-hover': '8px 8px 0px rgb(224, 213, 213)',
        'retro-button': '4px 4px 0px rgb(26, 35, 126)',
        'retro-button-hover': '6px 6px 0px rgb(26, 35, 126)',
        'retro-inset': 'inset 2px 2px 0px rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: {
        'retro-grid': `
          linear-gradient(rgba(224, 213, 213, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(224, 213, 213, 0.5) 1px, transparent 1px)
        `,
        'retro-grid-dense': `
          linear-gradient(rgba(224, 213, 213, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(224, 213, 213, 0.3) 1px, transparent 1px)
        `,
        'geometric-gradient': `
          radial-gradient(circle at 20% 20%, rgba(244, 229, 66, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(46, 91, 218, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(231, 76, 60, 0.1) 0%, transparent 50%)
        `,
      },
      backgroundSize: {
        'grid': '20px 20px',
        'grid-dense': '10px 10px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};