/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'swans-down': {
          '50': '#f0f9f6',
          '100': '#dff2eb',
          '200': '#b9e1d5',
          '300': '#8bcaba',
          '400': '#5aad9b',
          '500': '#389180',
          '600': '#277467',
          '700': '#205c54',
          '800': '#1b4a44',
          '900': '#173d38',
          '950': '#0c2220',
        },

      },
    },
  },
  plugins: [],
};
