import { useState } from "react";
import Dashboard from "./dashboard";
import Login from "./login";

export default function Home() {
  return (
    <>
      <Login />
      <Dashboard />
    </>
  );
}
