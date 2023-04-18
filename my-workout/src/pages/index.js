import { useState } from "react";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import { useAuthContext } from "@/hooks/useAuthContext";
import Head from "next/head";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <>
      <Head>
        <title>My workout</title>
        <meta name="Workout" content="Workout serie"></meta>
        <link rel="icon" href="/gym.png" />
      </Head>
      {!user && <Login />}
      {user && <Dashboard />}
    </>
  );
}
