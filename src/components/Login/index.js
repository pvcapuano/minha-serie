import Head from "next/head";
import React, { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { useAuth } from "context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { login, signup, currentUser, signInWithGoogle } = useAuth();


  async function submitHandler(event) {
    event.preventDefault();

    
    if (!email || !password) {
      toast.error("Complete your email or password.");
      return;
    }

    if (isLoggingIn) {
      try {
        await login(email, password);
      } catch (err) {
        toast.error("Incorrect email or password.");
      }
      return;
    }
    await signup(email, password);
  }
  

  return (
    <>
      <Head>
        <title>{`My Workout | ${isLoggingIn ? "Login" : "Register"}`}</title>
      </Head>

      <form
        className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4"
        onSubmit={submitHandler}
      >
        <h1 className="font-extrabold select-none text-2xl sm:text-6xl ">
          {isLoggingIn ? "Login" : "Register"}
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
          <h2 className="relative z-20">
            {" "}
            {isLoggingIn ? "Sign In" : "Sign Up"}
          </h2>
        </button>
        <h2
          onClick={() => {
            setIsLoggingIn(!isLoggingIn);
          }}
          className="duration-300 hover:scale-110 cursor-pointer uppercase"
        >
          {!isLoggingIn ? "Sign In" : "Sign Up"}
        </h2>
        <button onClick={signInWithGoogle}>Google</button>
      </form>
    </>
  );
};

export default Login;
