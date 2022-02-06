// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
import { useEffect } from "react";

import "../styles/basic.css";
export default function MyApp({ Component, pageProps }) {
    
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />
}