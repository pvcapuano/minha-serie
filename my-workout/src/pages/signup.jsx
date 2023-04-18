import React, { useState } from "react";
import useSignup from "@/hooks/useSignup";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signup } = useSignup();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(email, password);

    await router.push("/");
  };
  return (
    <>
      <Head>
        <title>{"My Workout | Register"}</title>
      </Head>

      <form
        className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="font-extrabold select-none text-2xl sm:text-6xl ">
          Register
        </h1>

        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-500 text-slate-900 p-2 w-full max-w-[40ch]"
        />

        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-500  text-slate-900 p-2 w-full max-w-[40ch]"
        />

        <button
          className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
          type="submit"
        >
          <h2 className="relative z-20">Sign Up</h2>
        </button>
        <h2 className="duration-300 hover:scale-110 cursor-pointer uppercase">
          <Link href="/">Sign In</Link>
        </h2>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default SignUp;
