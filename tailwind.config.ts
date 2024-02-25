import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   // Configure your color palette here
    //   primary: 'rgb(var(--color-primary)',
    //   secondary: '#ecc94b',
    // },
    // extend: {
    // },
  },
  plugins: [],
};
export default config;
