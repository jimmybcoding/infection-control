import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lora": ['var(--font-lora)']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom": '0 10px 20px 0 rgb(100 100 100)',
        "questions": '5px 5px 0px 0px rgba(109,40,217)'
      },
      transitionProperty: {
        "size": "height"
      }  
    },
  },
  plugins: [],
};
export default config;
