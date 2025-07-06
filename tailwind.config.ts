import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "480": { max: "480px" },
      "1018": { max: "1018px" },
      "1150": { max: "1150px" },
      "1230": { max: "1232px" },
      "1350": { max: "1350px" },
    },
    extend: {
      backgroundImage: {
        "header-bg1": "url('/img/Header/fon1.png')",
        "header-bg2": "url('/img/Header/fon2.jpg')",
        "header-bg3": "url('/img/Header/fon3.jpg')",
        "client-bg": "url('/img/Clients/clients-fon.png')",
      },
      maxWidth: {
        "480": "480px",
        "768": "768px",
        "1024": "1024px",
        "1280": "1280px",
        "1440": "1440px",
      },
      fontSize: {
        "1024-title": "18px",
        "1024-subtitle": "14px",
      },
      colors: {
        black: "#010101",
        grey: "#F7F7F7",
        white: "#FFFFFF",
        blue: "#4F8FF0",
      },
    },
  },
  plugins: [],
} satisfies Config;
