import Link from "next/link";
import React from "react";
import useLogout from "../../hooks/useLogout";
const NavBar = () => {
  const { logout } = useLogout();
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">SignUp</Link>
      <p onClick={logout}>Logout</p>
    </div>
  );
};

export default NavBar;
