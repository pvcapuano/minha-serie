import Login from "../components/Login";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My workout</title>
        <meta name="Workout" content="Workout serie"></meta>
        <link rel="icon" href="/gym.png" />
      </Head>
      <Login />
    </>
  );
}
