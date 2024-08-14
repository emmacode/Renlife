import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#989FF8",
        secondary: "#767DE3",
        blackA: "#484848",
        greenA: "#f1f2ff",
        greenB: "#D8DBFF",
        greyA: "#F1F2FF",
        greyB: "#C8C8C8",
        redA: "#ff0000",
        whiteA: "#FAFAFA",
      },
      fontFamily: {
        poppins: "Poppins",
        workSans: "WorkSans",
      },
    },
  },
  plugins: [],
};
export default config;
