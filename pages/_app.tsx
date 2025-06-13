import "@/styles/globals.css";
import GlobalStyle from "@/components/GlobalStyle";
import type { AppProps } from "next/app";
import { Fragment } from "react";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>);
}
