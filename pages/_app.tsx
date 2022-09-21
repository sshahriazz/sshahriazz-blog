import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";
import ThemeProvider from "../components/ThemeProvider";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  showSpinner: false,
});
Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
