// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
import { useEffect } from "react";
import '../styles/index.css';
import "../styles/basic.css";
import SimpleReactLightbox from 'simple-react-lightbox'





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