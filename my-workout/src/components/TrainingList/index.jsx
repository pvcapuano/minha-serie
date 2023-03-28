import React from "react";
import { db } from "@/config/firebase";
import { deleteDoc, doc } from "firebase/firestore";

const TrainingList = ({ trainings }) => {
  const handleClick = async (id) => {
    const ref = doc(db, "training", id);
    await deleteDoc(ref);
  };

  return (
    <div>
      <ul>
        {trainings.map((training) => (
          <li key={training.id} onClick={() => handleClick(training.id)}>
            {training.exercise} {training.kilos} {training.round}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingList;
