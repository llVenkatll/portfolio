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
        // Dark theme colors (Oxford Blue palette)
        primary: {
          DEFAULT: '#1e3a5f', // Dark Oxford blue
          light: '#f8f6f0',   // Warm cream/beige background
        },
        secondary: {
          DEFAULT: '#2c4a6b', // Slightly lighter Oxford blue
          light: '#f1f0eb',   // Light beige secondary
        },
        tertiary: {
          DEFAULT: '#d4af37', // Gold/beige accent for dark theme
          light: '#1e3a5f',   // Oxford blue for light theme
        },
        text: {
          DEFAULT: '#f8f6f0', // Light cream text for dark theme
          light: '#1e3a5f',   // Dark Oxford blue text for light theme
        },
        textLight: {
          DEFAULT: '#b8c5d1', // Muted light blue for dark theme
          light: '#5a6c7d',   // Muted Oxford blue for light theme
        },
        accent: {
          DEFAULT: '#d4af37', // Gold accent
          light: '#b8860b',   // Darker gold for light theme
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
