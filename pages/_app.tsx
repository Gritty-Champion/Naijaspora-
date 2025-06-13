import "@/styles/globals.css";
import GlobalStyle from "@/components/GlobalStyle";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ControllerProvider } from "@/providers/Controller";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ControllerProvider>
      <AnimatePresence mode="wait" initial={true}>
        <GlobalStyle />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ControllerProvider>
  );
}
