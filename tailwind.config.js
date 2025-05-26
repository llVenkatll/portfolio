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
        // Dark theme colors (Original dark blue + neon)
        primary: {
          DEFAULT: '#0a192f', // Dark navy blue
          light: '#f8f6f0',   // Warm cream/beige background for light theme
        },
        secondary: {
          DEFAULT: '#112240', // Slightly lighter navy
          light: '#f1f0eb',   // Light beige secondary for light theme
        },
        tertiary: {
          DEFAULT: '#64ffda', // Bright cyan/neon for dark theme
          light: '#1e3a5f',   // Oxford blue for light theme
        },
        text: {
          DEFAULT: '#ccd6f6', // Light blue-gray text for dark theme
          light: '#1e3a5f',   // Dark Oxford blue text for light theme
        },
        textLight: {
          DEFAULT: '#8892b0', // Muted blue-gray for dark theme
          light: '#5a6c7d',   // Muted Oxford blue for light theme
        },
        accent: {
          DEFAULT: '#64ffda', // Bright neon cyan for dark theme
          light: '#d4af37',   // Gold accent for light theme
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
