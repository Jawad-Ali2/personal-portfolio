import type { Config } from "tailwindcss";

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
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        firaCode: ['var(--font-fira-code)']
      },
      clipPath: {
        left: "polygon(0 0, 100% 0, 50% 100%, 0 100%",
        right: "polygon(50% 0, 100% 0, 100% 100%, 0 100%)",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
} satisfies Config;
