import React, { useContext, useState } from "react";
import { db } from "@/config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "@/hooks/useAuthContext";

const TrainingForm = () => {
  const [newExercise, setNewExercise] = useState("");
  const [newKilos, setNewKilos] = useState("");
  const [newRound, setNewRound] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "training");

    await addDoc(ref, {
      exercise: newExercise,
      kilos: newKilos,
      round: newRound,
      uid: user.uid,
    });

    setNewExercise("");
    setNewKilos("");
    setNewRound("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new workout</span>

        <input
          required
          type="text"
          onChange={(e) => setNewExercise(e.target.value)}
          value={newExercise}
        />
        <input
          required
          type="text"
          onChange={(e) => setNewKilos(e.target.value)}
          value={newKilos}
        />
        <input
          required
          type="text"
          onChange={(e) => setNewRound(e.target.value)}
          value={newRound}
        />
      </label>
      <button>Add</button>
    </form>
  );
};

export default TrainingForm;
