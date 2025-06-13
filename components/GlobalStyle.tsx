import { inter, montserrat } from "@/styles/font";

export default function GlobalStyle() {
  return (
    <style jsx global>
      {`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-montserrat: ${montserrat.style.fontFamily};
        }
      `}
    </style>
  );
}
