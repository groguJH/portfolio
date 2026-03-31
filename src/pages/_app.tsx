import GreetingLayer from "No/components/layout/GreetingLayer";
import NavigationContainer from "../containers/NavigationContainer";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlassCursorContainer from "../components/presenters/GlassCursorContainer";
import { MainLayout } from "No/containers/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlassCursorContainer />
      <MainLayout>
        <GreetingLayer />
        <NavigationContainer />
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
