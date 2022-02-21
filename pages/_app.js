// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
import { useEffect } from "react";
import '../styles/index.css';
import "../styles/basic.css";
import SimpleReactLightbox from 'simple-react-lightbox'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (

    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
    )
}