import React, { useContext, useState } from "react";
import { db } from "@/config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "@/hooks/useAuthContext";

const TrainingForm = () => {
  const [newExercise, setNewExercise] = useState("");
  const [newKilos, setNewKilos] = useState("");
  const [newRound, setNewRound] = useState("");
  const [serie, setSerie] = useState(null);
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "training");

    await addDoc(ref, {
      exercise: newExercise,
      kilos: newKilos,
      round: newRound,
      serie: serie,
      uid: user.uid,
    });

    setNewExercise("");
    setNewKilos("");
    setNewRound("");
    setSerie("");
  };

  return (
    <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row justify-between">
          <input
            required
            type="text"
            onChange={(e) => setNewExercise(e.target.value)}
            value={newExercise}
            placeholder="Exercise"
            className="outline-none p-2 text-black   sm:text-lg w-2/6"
          />
          <input
            required
            type="text"
            onChange={(e) => setNewKilos(e.target.value)}
            value={newKilos}
            placeholder="Kg"
            className="outline-none p-2 text-black  sm:text-lg w-1/6 "
          />
          <input
            required
            type="text"
            onChange={(e) => setNewRound(e.target.value)}
            value={newRound}
            placeholder="Round"
            className="outline-none p-2 text-black  sm:text-lg w-1/6 "
          />

          <select
            required
            value={serie}
            onChange={(e) => setSerie(e.target.value)}
            className="outline-none p-2 text-black  sm:text-lg w-1/6 "
          >
            <option value="serieA">Serie A</option>
            <option value="serieB">Serie B</option>
            <option value="serieC">Serie C</option>
          </select>

          <button className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrainingForm;
