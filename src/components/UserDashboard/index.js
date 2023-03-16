import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const UserDashboard = () => {
  return (
    <>
      <Head>
        <title>My Workout | Trainings</title>
      </Head>

      <div className="w-full max-w-[65ch] mx-auto flex flex-col justify-center items-center gap-3 sm:gap-5">
        <h1 className="md:text-4xl text-2xl font-bold">
          Choose your training:
        </h1>

        <Link
          className="md:text-2xl text-xl text-center hover:scale-125 cursor-pointer duration-300 border-b-2"
          href="/training1st"
        >
          1st Training
        </Link>
        <Link
          className="md:text-2xl text-xl hover:scale-125 cursor-pointer duration-300 border-b-2"
          href="/training2nd"
        >
          2nd Training
        </Link>
      </div>
    </>
  );
};

export default UserDashboard;
