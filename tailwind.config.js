/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-animation': 'gradient 10s ease infinite', // Existing animation
        'pulse-slow': 'pulse 3s infinite', // Example of additional custom animations
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(45deg, #ff6a00, #ee0979, #ff9e2c)', // Existing gradient
        'gradient-blues': 'linear-gradient(90deg, #00c6ff, #0072ff)', // New gradient
        'gradient-pinkpurple': 'linear-gradient(135deg, #ff0099, #493240)', // New gradient for diversity
      },
      backgroundSize: {
        '400%': '400%', // Existing large background size for smooth animation
      },
      colors: {
        // Example additional colors for customizations
        customOrange: '#ff6a00',
        customPink: '#ff0099',
        customBlue: '#0072ff',
      },
    },
  },
  plugins: [
    require('daisyui'), // DaisyUI for UI components
  ],
  daisyui: {
    themes: ["light", "dark"], // DaisyUI themes
  },
};
