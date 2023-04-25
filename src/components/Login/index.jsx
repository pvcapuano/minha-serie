import React, { useState } from "react";
import useLogin from "@/hooks/useLogin";
import Head from "next/head";
import useGoogleLogin from "@/hooks/useGoogleLogin";
import { toast } from "react-toastify";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingInWithGoogle, setIsLoggingInWithGoogle] = useState(false);

  const { error, login } = useLogin();

  const { googlelogin } = useGoogleLogin();

  const handleGoogleLogin = () => {
    setIsLoggingInWithGoogle(true);
    googlelogin();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is logging in with Google
    if (!email && !password && isLoggingInWithGoogle) {
      googlelogin();
      return;
    }

    // Validate email and password
    if (!email || !password) {
      toast.error("Complete your email or password.");
      return;
    }

    await login(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Head>
        <title>{"My Workout | Login"}</title>
      </Head>

      <form
        className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="font-extrabold select-none text-2xl sm:text-6xl ">
          Login
        </h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-500 text-slate-900 p-2 w-full max-w-[40ch]"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-500  text-slate-900 p-2 w-full max-w-[40ch]"
        />

        <button
          type="submit"
          className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
        >
          <h2 className="relative z-20">Sign In</h2>
        </button>
        <h2 className="duration-300 hover:scale-110 cursor-pointer uppercase">
          <Link href="/signup">Sign Up</Link>
        </h2>

        {/*  <label className="w-full max-w-[40ch] py-2 flex items-center justify-center border border-white border-solid duration-300 hover:scale-110 cursor-pointer">
          <button className="uppercase" onClick={handleGoogleLogin}>
            Sign In With Google
            <i className="fa-brands fa-google ml-2"></i>
          </button>
        </label> */}
      </form>
    </>
  );
};

export default Login;
