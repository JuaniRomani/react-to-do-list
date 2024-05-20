import "@/styles/globals.css";
import useRouterReady from "@/hooks/useRouterReady";

export default function App({ Component, pageProps }) {
  const isRouterReady = useRouterReady();

  return isRouterReady ? <Component {...pageProps} /> : null;
}
