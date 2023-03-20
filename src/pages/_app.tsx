import "@/styles/main.scss";
//@ts-ignore
import TagManager from "react-gtm-module";

import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const tagManagerArgs = {
    gtmId: process.env.NEXT_PUBLIC_GTM,
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return <Component {...pageProps} />;
}
