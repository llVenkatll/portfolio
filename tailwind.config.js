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
        // Dark theme colors (your current colors)
        primary: {
          DEFAULT: '#0a192f', // Dark navy
          light: '#ffffff',   // Light background
        },
        secondary: {
          DEFAULT: '#112240', // Slightly lighter navy
          light: '#f1f5f9',   // Light secondary
        },
        tertiary: {
          DEFAULT: '#64ffda', // Cyan/teal
          light: '#3b82f6',   // Blue for light theme
        },
        text: {
          DEFAULT: '#ccd6f6', // Light text for dark theme
          light: '#1e293b',   // Dark text for light theme
        },
        textLight: {
          DEFAULT: '#8892b0', // Muted text for dark theme
          light: '#64748b',   // Muted text for light theme
        },
        accent: {
          DEFAULT: '#f7931e', // Orange accent
          light: '#ea580c',   // Orange for light theme
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
