import { BackgroundLayout } from "../components/presenters/layout/BackgroundLayer";
import NavigationContainer from "../containers/NavigationContainer";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <BackgroundLayout>
        <NavigationContainer />
        <Component {...pageProps} />
      </BackgroundLayout>
    </div>
  );
}
