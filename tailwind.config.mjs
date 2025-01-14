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
        "gray-two": "#BCBDC4",
        "blue-one": "#2F3343",
      },
      fontFamily: {
        spartan: ['"League Spartan"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        slab: ["RobotoSlab", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
