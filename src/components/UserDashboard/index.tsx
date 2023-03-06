import React, { useState } from "react";
import Head from "next/head";
import { useAuth } from "context/AuthContext";

const UserDashboard = () => {
  const { userInfo } = useAuth();
  const [addTodo, setAddTodo] = useState(false);
  const [todo, setTodo] = useState("");
  const [kilos, setKilos] = useState("");
  const [round, setRound] = useState("");

  return (
    <>
      <Head>
        <title>My Workout | Training</title>
      </Head>

      <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5">
        {addTodo && (
          <div className="flex flex-col sm:flex-row justify-between">
            <input
              type="text"
              placeholder="Exercise"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="outline-none p-2 text-black   sm:text-lg w-3/6"
            />
            <input
              type="text"
              placeholder="Kg"
              value={kilos}
              onChange={(e) => setKilos(e.target.value)}
              className="outline-none p-2 text-black  sm:text-lg w-1/6"
            />
            <input
              type="text"
              placeholder="Rounds"
              value={round}
              onChange={(e) => setRound(e.target.value)}
              className="outline-none p-2 text-black sm:text-lg w-1/6"
            />

            <button className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40">
              Add
            </button>
          </div>
        )}
        {userInfo && <></>}

        {!addTodo && (
          <button
            onClick={() => setAddTodo(true)}
            className="text-white border border-solid border-white py-2 text-center uppercase text-lg duration-300 hover:opacity-30"
          >
            Add Exercise
          </button>
        )}
      </div>
    </>
  );
};

export default UserDashboard;
