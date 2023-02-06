import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import "@fortawesome/fontawesome-svg-core/styles.css"; 
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <script src="https://kit.fontawesome.com/e4446002ed.js" crossOrigin="anonymous"></script>
    </>
  )
}

export default MyApp
