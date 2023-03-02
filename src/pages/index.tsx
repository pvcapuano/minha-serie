import Login from "../components/Login";
import Head from "next/head";
import { useAuth } from "context/AuthContext";
import UserDashboard from "@/components/UserDashboard";

export default function Home() {
  const { currentUser } = useAuth();
  return (
    <>
      <Head>
        <title>My workout</title>
        <meta name="Workout" content="Workout serie"></meta>
        <link rel="icon" href="/gym.png" />
      </Head>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </>
  );
}
