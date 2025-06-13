/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import colors from "./styles/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

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
    // ✅ FULL override (not extending)
    colors: {
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
      neutral: colors.neutral,
      'neutral-variant': colors['neutral-variant'],
    },
    fontFamily: {
      inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      montserrat: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
