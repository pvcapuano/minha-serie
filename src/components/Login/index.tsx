import Head from "next/head";
import React, { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
  email: string;
  password: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  /* function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Preencha todos os campos.");
      return;
    }
  } */

  function changeText() {
    setIsLoggingIn(!isLoggingIn);
  }

  function clearErrorLog() {
    clearErrors();
  }

  return (
    <>
      <Head>
        <title>{`My Workout | ${isLoggingIn ? "Login" : "Register"}`}</title>
      </Head>

      <form
        className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-extrabold select-none text-2xl sm:text-6xl ">
          {isLoggingIn ? "Login" : "Register"}
        </h1>

        {/* {errors.email?.type === "required" &&
          errors.password?.type === "required" && (
            <div className="border-rose-500 border text-center border-solid text-rose-300 p-2 text-red">
              <p role="alert">Email and Password is required</p>
            </div>
          )} */}
        <input
          {...register("email", { required: true, maxLength: 20 })}
          type="text"
          /* value={email}
          onChange={(e) => setEmail(e.target.value)} */
          placeholder="Email"
          className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-500 text-slate-900 p-2 w-full max-w-[40ch]"
        />
        {errors.email?.type === "required" && (
          <div className="border-rose-500 border  border-solid text-rose-300 p-2	">
            <p role="alert">Email is required</p>
          </div>
        )}

        <input
          {...register("password", { required: true, maxLength: 20 })}
          type="password"
          /* value={password}
          onChange={(e) => setPassword(e.target.value)} */
          placeholder="Password"
          className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-500  text-slate-900 p-2 w-full max-w-[40ch]"
        />
        {errors.password?.type === "required" && (
          <div className="border-rose-500 border  border-solid text-rose-300 p-2	">
            <p role="alert">Password is required</p>
          </div>
        )}

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
            changeText(), clearErrorLog();
          }}
          className="duration-300 hover:scale-110 cursor-pointer uppercase"
        >
          {!isLoggingIn ? "Sign In" : "Sign Up"}
        </h2>
      </form>
    </>
  );
};

export default Login;
