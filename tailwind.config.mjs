/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
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
        primary: "#1D2133",
        secondary: "#EC4E4F",
        dark: "#222222",
        "gray-one": "#676767",
        "white-one": "#F5F5F5",
      },
      fontFamily: {
        spartan: ['"League Spartan"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
