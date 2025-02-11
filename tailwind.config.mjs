/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#0a364f",
        primaryDark:"#072537",
        primaryLight:"#3a5e72",
        primaryExtraLight:"#edf0f2",
        grayBg:"#fbfbfb"
      },
      fontSize:{
        'xxs':"8px"
      ,
     },
     animation: {
      'spin-fast': 'spin 0.8s linear infinite',
      pulse: 'pulse 1.5s ease-in-out infinite',
    },
    },
  },
  plugins: [],
};
