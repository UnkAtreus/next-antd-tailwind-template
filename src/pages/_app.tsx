import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
// import "styles/global.less";
require("styles/global.less");

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
