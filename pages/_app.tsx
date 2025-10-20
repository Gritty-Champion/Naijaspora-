import "@/styles/globals.css";
import GlobalStyle from "@/components/GlobalStyle";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ControllerProvider } from "@/providers/Controller";
import { AuthProvider } from "@/providers/AuthProvider";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ControllerProvider>
      <AuthProvider>
        <AnimatePresence>
          <GlobalStyle />
          <Component
            {...pageProps}
            key={router.route}
          />
        </AnimatePresence>
      </AuthProvider>
    </ControllerProvider>
  );
}
