import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { NextUIProvider } from "@nextui-org/react";
import  ThemeProvider  from "../components/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider>
          <Layout>
            <Header />
            <Component {...pageProps} />
          </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
