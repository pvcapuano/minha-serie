import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};

export default useLogout;
