import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pvvRed: "rgb(167 114 118)",
        pvvTheme: "#3a3a3a",
      },
    },
  },
  plugins: [],
};
export default config;
