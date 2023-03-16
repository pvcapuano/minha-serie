import Link from "next/link";
import Head from "next/head";
import React from "react";

const Training2nd = () => {
  return (
    <>
      <Head>
        <title>My Workout | 2nd Training</title>
      </Head>

      <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5">
        <Link href="/">
          <i class="fa-solid fa-arrow-left"></i>
          Voltar
        </Link>
        <h1>Segundo treino</h1>
      </div>
    </>
  );
};

export default Training2nd;
