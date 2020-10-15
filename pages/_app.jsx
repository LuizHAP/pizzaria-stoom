import "../styles/globals.css";
import Provider from "../hooks/index";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable={false}
        pauseOnHover
      />
    </Provider>
  );
}

export default MyApp;
