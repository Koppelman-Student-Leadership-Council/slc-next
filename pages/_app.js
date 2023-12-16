// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
import { useEffect } from "react";
import '../styles/index.css';
import "../styles/basic.css";
import "../styles/globals.css";
import SimpleReactLightbox from 'simple-react-lightbox'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
export default function MyApp({ Component, pageProps }) {
  
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);
  return (

    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
    )
}