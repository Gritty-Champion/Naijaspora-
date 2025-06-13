import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    {
      path: "../assets/fonts/Montserrat/Montserrat-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/Montserrat-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/Montserrat-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/Montserrat-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/Montserrat-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  fallback: ["sans-serif"],
  display: "swap",
  variable: "--font-montserrat",
});


export const inter = localFont({
  src: [
    {
      path: "../assets/fonts/Inter/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  fallback: ["sans-serif"],
  display: "swap",
  variable: "--font-inter",
});