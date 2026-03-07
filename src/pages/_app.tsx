import NavigationContainer from "../containers/NavigationContainer";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationContainer />
      <Component {...pageProps} />
    </>
  );
}
