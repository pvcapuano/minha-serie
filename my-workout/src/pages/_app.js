import { AuthContextProvider } from "@/context/AuthContext";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <AuthContextProvider>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* <ToastContainer autoClose={2000} /> */}
        {/* </Layout> */}
      </AuthContextProvider>
    </React.StrictMode>
  );
}
