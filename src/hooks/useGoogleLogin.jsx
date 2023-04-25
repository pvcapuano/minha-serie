import { useState } from "react";
import { auth } from "@/config/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

const useGoogleLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const provider = new GoogleAuthProvider();

  const googlelogin = async () => {
    setError(null);

    await signInWithPopup(auth, provider)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return { error, googlelogin };
};

export default useGoogleLogin;
