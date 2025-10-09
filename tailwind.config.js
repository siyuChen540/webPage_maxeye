/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 3.9%)',
        foreground: 'hsl(0 0% 98%)',
        card: 'hsl(0 0% 5.9%)',
        'card-foreground': 'hsl(0 0% 98%)',
        popover: 'hsl(0 0% 3.9%)',
        'popover-foreground': 'hsl(0 0% 98%)',
        primary: 'hsl(0 0% 98%)',
        'primary-foreground': 'hsl(0 0% 9%)',
        secondary: 'hsl(0 0% 14.9%)',
        'secondary-foreground': 'hsl(0 0% 98%)',
        muted: 'hsl(0 0% 14.9%)',
        'muted-foreground': 'hsl(0 0% 63.9%)',
        accent: 'hsl(346.8 77.2% 49.8%)',
        'accent-foreground': 'hsl(0 0% 98%)',
        destructive: 'hsl(0 62.8% 30.6%)',
        'destructive-foreground': 'hsl(0 0% 98%)',
        border: 'hsl(0 0% 14.9%)',
        input: 'hsl(0 0% 14.9%)',
        ring: 'hsl(346.8 77.2% 49.8%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-up': 'fade-up 0.5s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
