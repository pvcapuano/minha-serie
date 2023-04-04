import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import { AuthContextProvider } from "@/context/AuthContext";

//toastify import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer autoClose={2000} />
      </Layout>
    </AuthContextProvider>
  );
}
