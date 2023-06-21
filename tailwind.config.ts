import { type Config } from "tailwindcss";
import typo from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "page-background": "#F7F7F7",
      blue: {
        main: "#053cfe",
        medium: "#d2dcff",
        light: "#edf1ff",
      },
      white: {
        main: "#ffffff",
        medium: "#ffffffbd",
        light: "#ffffff61",
      },
      black: {
        DEFAULT: "#000000",
        main: "#454545",
        medium: "#666666",
        light: "#9e9e9e",
      },
      card: {
        main: "#fafafa",
        page: "#f6f6f6",
        input: "#f3f3f3",
        context: "#f5eeff",
        inspiration: "#fff5e5",
        concept: "#d5d1ff",
        popup: "#0a0a0aad",
      },
      context: {
        blue: "#6cd3ff",
        purple: "#b984ff",
        pink: "#fd8cff",
        red: "#F98989",
        orange: "#ff9e67",
        yellow: "#edff5d",
        green: "#7cfba0",
      },
      exercise: {
        1: "#deffdb",
        2: "#d2efff",
        3: "#f2d7ff",
        4: "#ffedd7",
        5: "#ffd2d2",
        6: "#e3fff7",
        7: "#e9d7ce",
      },
      user: {
        1: "#a80003",
        2: "#f58500",
        3: "#be8900",
        4: "#4aa600",
        5: "#007a73",
        6: "#005ad7",
        7: "#6713bb",
        8: "#a1009e",
        9: "#776345",
        10: "#565656",
      },
      postit: {
        body: "#f1ff9b",
        corner: "#d9f146",
        tape: "#00000014",
        like: "#f230aa",
      },
    },
    extend: {},
  },
  plugins: [typo],
} satisfies Config;
