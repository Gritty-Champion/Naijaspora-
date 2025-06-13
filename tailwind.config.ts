/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import colors from "./styles/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import { b, tr } from "framer-motion/client";

// 🔧 Plugin to inject all colors as CSS variables
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({ ":root": newVars });
}

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      primary: {
        ...colors.primary,
        base: colors.primary.base,
        on: colors.primary.on_primary,
        container: colors.primary.primary_container,
        on_container: colors.primary.on_primary_container,
        hover: colors.primary.hover,
        disabled: colors.primary.disabled,
        on_disabled: colors.primary.on_disabled,
      },
      secondary: {
        ...colors.secondary,
        base: colors.secondary.base,
        on: colors.secondary.on_secondary,
        container: colors.secondary.secondary_container,
        on_container: colors.secondary.on_secondary_container,
        hover: colors.secondary.hover,
        disabled: colors.secondary.disabled,
        on_disabled: colors.secondary.on_disabled,
      },
      surface: {
        base: colors.tertiary.on_tertiary,
        on: colors.neutral[10],
        container: colors["neutral-variant"][95],
      },
      neutral: colors.neutral,
      "neutral-variant": colors["neutral-variant"],
    },
    fontSize: {
      "display-large": [
        "57px",
        { lineHeight: "64px", letterSpacing: "-0.25px" },
      ],

      "display-medium": ["45px", { lineHeight: "52px", letterSpacing: "0" }],
      "display-small": ["36px", { lineHeight: "44px", letterSpacing: "0" }],
      "headline-large": ["32px", { lineHeight: "40px", letterSpacing: "0" }],
      "headline-medium": ["28px", { lineHeight: "36px", letterSpacing: "0" }],

      "headline-small": ["24px", { lineHeight: "32px", letterSpacing: "0" }],
      "title-large": ["22px", { lineHeight: "28px", letterSpacing: "0" }],
      "title-medium": ["16px", { lineHeight: "24px", letterSpacing: "0" }],
      "title-small": ["14px", { lineHeight: "24px", letterSpacing: "0" }],

      // Inter fonts
      "label-large": ["14px", { lineHeight: "20px", letterSpacing: "0" }],
      "label-medium": ["12px", { lineHeight: "16px", letterSpacing: "0" }],
      "label-small": ["11px", { lineHeight: "16px", letterSpacing: "0" }],
      "body-large": ["16px", { lineHeight: "24px", letterSpacing: "0" }],
      "body-medium": ["14px", { lineHeight: "22px", letterSpacing: "0" }],
      "body-small": ["12px", { lineHeight: "16px", letterSpacing: "0" }],
    },
    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      montserrat: ["var(--font-montserrat)"],
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
