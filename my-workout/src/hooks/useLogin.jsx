import { useState } from "react";
import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return { error, login };
};

export default useLogin;
