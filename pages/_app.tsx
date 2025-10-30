import "@/styles/globals.css";
import GlobalStyle from "@/components/GlobalStyle";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ControllerProvider } from "@/providers/Controller";
import { AuthProvider } from "@/providers/AuthProvider";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import { ProductsProvider } from "@/providers/ProductsProvider";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ProductsProvider>
          <ControllerProvider>
            <AnimatePresence>
              <GlobalStyle />
              <Component
                {...pageProps}
                key={router.route}
              />
            </AnimatePresence>
          </ControllerProvider>
        </ProductsProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
