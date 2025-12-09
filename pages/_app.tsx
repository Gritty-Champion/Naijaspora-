import "@/styles/globals.css";
import GlobalStyle from "@/components/GlobalStyle";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ControllerProvider } from "@/providers/Controller";
import { AuthProvider } from "@/providers/AuthProvider";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import { ProductsProvider } from "@/providers/ProductsProvider";

// Create QueryClient outside component to prevent recreation on every render
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      // Prevent errors from propagating to error boundaries
      throwOnError: false,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
