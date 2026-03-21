import GreetingLayer from "No/components/layout/GreetingLayer";
import { BackgroundLayout } from "../components/layout/BackgroundLayer";
import NavigationContainer from "../containers/NavigationContainer";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlassCursorContainer from "../components/presenters/GlassCursorContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlassCursorContainer></GlassCursorContainer>
      <BackgroundLayout>
        <GreetingLayer />
        <NavigationContainer />
        <Component {...pageProps} />
      </BackgroundLayout>
    </div>
  );
}
