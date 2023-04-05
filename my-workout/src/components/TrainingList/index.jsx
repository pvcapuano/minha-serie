import React, { useState } from "react";
import { db } from "@/config/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

const TrainingList = ({ trainings }) => {
  //update
  const [updatedExerciseValue, setUpdatedExerciseValue] = useState("");
  const [updatedKilos, setUpdatedKilos] = useState("");
  const [updatedRound, setUpdatedRound] = useState("");
  const [updateSerie, setUpdateSerie] = useState("");

  //edit
  const [editExerciseId, setEditExerciseId] = useState(null);

  const handleDelete = async (id) => {
    const ref = doc(db, "training", id);
    await deleteDoc(ref);
  };

  const editTraining = (id) => {
    setEditExerciseId(id);
  };

  const handleUpdateTraining = async (id) => {
    const trainingDoc = doc(db, "training", id);

    if (
      updatedExerciseValue == "" ||
      updatedKilos == "" ||
      updatedRound == ""
    ) {
      setEditExerciseId(null);
      toast.error("Please, complete all fields");
      return;
    }

    await updateDoc(trainingDoc, {
      exercise: updatedExerciseValue,
      kilos: updatedKilos,
      round: updatedRound,
      serie: updateSerie,
    });
    setEditExerciseId(false);
  };

  const cancelEditTraining = () => {
    setEditExerciseId(null);
    setUpdatedExerciseValue("");
    setUpdatedKilos("");
    setUpdatedRound("");
    setUpdateSerie("");
  };

  /* const serieA = [];
  const serieB = [];
  const serieC = [];

  
  trainings.forEach((training) => {
    if (training.series === "serieA") {
      serieA.push(training);
    } else if (training.series === "serieB") {
      serieB.push(training);
    } else if (training.series === "serieC") {
      serieC.push(training);
    }
  }); */

  return (
    <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col mt-6 gap-3 sm:gap-5">
      {trainings.map((training) => (
        <div key={training.id}>
          {editExerciseId === training.id ? (
            <div className="p-2 flex items-center  border border-white border-solid mb-3">
              <input
                value={updatedExerciseValue}
                placeholder="Exercise"
                onChange={(e) => setUpdatedExerciseValue(e.target.value)}
                className="w-40 mr-3 p-1 text-black placeholder:p-2"
              />
              <div className="flex justify-between items-center">
                <input
                  value={updatedKilos}
                  type="number"
                  placeholder="Kg"
                  onChange={(e) => setUpdatedKilos(e.target.value)}
                  className="w-20 mr-3 p-1 text-black placeholder:p-2"
                />
                <input
                  value={updatedRound}
                  type="number"
                  placeholder="Round"
                  onChange={(e) => setUpdatedRound(e.target.value)}
                  className="w-20 mr-3 p-1 text-black placeholder:p-2"
                />
                <select
                  required
                  value={updateSerie}
                  onChange={(e) => setUpdateSerie(e.target.value)}
                  className="w-20 outline-none p-2 text-black  sm:text-lg h-6"
                >
                  <option value="" selected disabled hidden></option>
                  <option value="serieA">Serie A</option>
                  <option value="serieB">Serie B</option>
                  <option value="serieC">Serie C</option>
                </select>
              </div>
              <div className="w-fit text-white font-medium text-base flex items-center justify-between ">
                <i
                  onClick={() => handleUpdateTraining(training.id)}
                  className="fa-solid fa-check px-2 duration-300 hover:scale-125 cursor-pointer"
                ></i>
                <i
                  onClick={cancelEditTraining}
                  class="fa-solid fa-xmark px-2 duration-300 hover:scale-125 cursor-pointer"
                ></i>
              </div>
            </div>
          ) : (
            <div className="p-2 flex items-center  border border-white border-solid mb-3">
              <div className="w-60 mr-3">{training.exercise}</div>
              <div className="flex justify-between items-center">
                <div className="w-20 mr-3">{training.kilos} Kgs</div>
                <div className="w-20 mr-3">{training.round} Rounds</div>
              </div>
              <div className="w-20 text-white font-medium text-base flex items-center justify-around ">
                <i
                  onClick={() => editTraining(training.id)}
                  className="fa-solid fa-pencil duration-300 hover:rotate-45 cursor-pointer"
                ></i>
                <button onClick={() => handleDelete(training.id)}>
                  <i className="fa-solid fa-trash-can px-2 duration-300 hover:scale-125 cursor-pointer"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>

    /* <>
      <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col mt-6 gap-3 sm:gap-5">
        <h2>Serie A</h2>
        {serieA.map((training) => {
          {
            training.exercise;
          }
        })}
      </div>
      <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col mt-6 gap-3 sm:gap-5">
        <h2>Serie B</h2>
        {serieB.map((training) => {
          {
            training.exercise;
          }
        })}
      </div>
      <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col mt-6 gap-3 sm:gap-5">
        <h2>Serie C</h2>
        {serieC.map((training) => {
          {
            training.exercise;
          }
        })}
      </div>
    </> */
  );
};

export default TrainingList;
