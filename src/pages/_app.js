import "@/styles/globals.css";
import Layout from "../components/Layout/Layout";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer autoClose={2000} />
      </Layout>
    </AuthProvider>
  );
}
