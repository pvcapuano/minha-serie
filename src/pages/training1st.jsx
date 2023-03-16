import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { toast } from "react-toastify";

const Training1st = () => {
  const trainingCollectionRef = collection(db, "training");

  //states

  const [trainingList, setTrainingList] = useState([]);
  const [newExercise, setNewExercise] = useState("");
  const [newKilos, setNewKilos] = useState(0);
  const [newRound, setNewRound] = useState(0);

  //update
  const [updatedExerciseValue, setUpdatedExerciseValue] = useState("");
  const [updatedKilos, setUpdatedKilos] = useState("");
  const [updatedRound, setUpdatedRound] = useState("");

  //edit
  /* const [editExercise, setEditExercise] = useState(false); */
  const [editExerciseId, setEditExerciseId] = useState(null);

  useEffect(() => {
    getTrainingList();
  }, []);

  const getTrainingList = async () => {
    try {
      const data = await getDocs(trainingCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTrainingList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmitTraining = async () => {
    try {
      await addDoc(trainingCollectionRef, {
        exercise: newExercise,
        kilos: newKilos,
        round: newRound,
      });

      getTrainingList();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTraining = async (id) => {
    const trainingDoc = doc(db, "training", id);
    await deleteDoc(trainingDoc);
  };

  const editTraining = (id) => {
    setEditExerciseId(id);
  };

  const updateTraining = async (id) => {
    const trainingDoc = doc(db, "training", id);

    setNewExercise("");
    setNewKilos(0);
    setNewRound(0);

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
    });
    setEditExerciseId(false);
    getTrainingList();
  };

  const cancelEditTraining = () => {
    setEditExerciseId(null);
    setUpdatedExerciseValue("");
    setUpdatedKilos("");
    setUpdatedRound("");
  };

  return (
    <>
      <Head>
        <title>My Workout | Workout 1</title>
      </Head>

      <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5">
        <Link href="/">
          <i class="fa-solid fa-arrow-left"></i>
          Back
        </Link>
        <div className="flex flex-col sm:flex-row justify-between">
          <input
            type="text"
            placeholder="Exercise"
            onChange={(e) => setNewExercise(e.target.value)}
            className="outline-none p-2 text-black   sm:text-lg w-3/6"
          />
          <input
            type="number"
            placeholder="Kg"
            onChange={(e) => setNewKilos(Number(e.target.value))}
            className="outline-none p-2 text-black  sm:text-lg w-1/6"
          />
          <input
            type="number"
            placeholder="Rounds"
            onChange={(e) => setNewRound(Number(e.target.value))}
            className="outline-none p-2 text-black sm:text-lg w-1/6"
          />

          <button
            onClick={onSubmitTraining}
            className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40"
          >
            Add
          </button>
        </div>

        <div>
          {trainingList.map((training) => (
            <div>
              <div key={training.id}>
                {editExerciseId === training.id ? (
                  <div className="p-2 flex items-center  border border-white border-solid mb-3">
                    <input
                      value={updatedExerciseValue}
                      placeholder="Exercise"
                      onChange={(e) => setUpdatedExerciseValue(e.target.value)}
                      className="w-60 mr-3 p-1 text-black placeholder:p-2"
                    />
                    <div className="flex justify-between items-center">
                      <input
                        value={updatedKilos}
                        type="number"
                        placeholder="Kg"
                        onChange={(e) =>
                          setUpdatedKilos(Number(e.target.value))
                        }
                        className="w-20 mr-3 p-1 text-black placeholder:p-2"
                      />
                      <input
                        value={updatedRound}
                        type="number"
                        placeholder="Round"
                        onChange={(e) =>
                          setUpdatedRound(Number(e.target.value))
                        }
                        className="w-20 mr-3 p-1 text-black placeholder:p-2"
                      />
                    </div>
                    <div className="w-fit text-white font-medium text-base flex items-center justify-between ">
                      <i
                        onClick={() => updateTraining(training.id)}
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
                      <button onClick={() => deleteTraining(training.id)}>
                        <i className="fa-solid fa-trash-can px-2 duration-300 hover:scale-125 cursor-pointer"></i>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {/* {!editExercise ? (
                <div className="p-2 flex items-center justify-between border border-white border-solid ">
                  <div className="flex-initial flex">{training.exercise}</div>
                  <div className="flex-2 flex">{training.kilos} Kgs</div>
                  <div className="flex-3 flex">{training.round} Rounds</div>
                  <div className="w-fit text-white font-medium text-base flex items-center justify-between ">
                    <i
                      onClick={() => setEditExercise(true)}
                      className="fa-solid fa-pencil duration-300 hover:rotate-45 cursor-pointer"
                    ></i>
                    <button onClick={() => deleteTraining(training.id)}>
                      <i className="fa-solid fa-trash-can px-2 duration-300 hover:scale-125 cursor-pointer"></i>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-2 flex items-center justify-between text-black border border-white border-solid ">
                  <input
                    value={updatedExerciseValue}
                    placeholder="Exercise"
                    onChange={(e) => setUpdatedExerciseValue(e.target.value)}
                    className="flex-initial flex"
                  />
                  <input
                    value={updatedKilos}
                    placeholder="Kg"
                    onChange={(e) => setUpdatedKilos(e.target.value)}
                    className="flex-2 flex"
                  />
                  <input
                    value={updatedRound}
                    placeholder="Round"
                    onChange={(e) => setUpdatedRound(e.target.value)}
                    className="flex-3 flex"
                  />
                  <div className="w-fit text-white font-medium text-base flex items-center justify-between ">
                    <i
                      onClick={() => updateTraining(training.id)}
                      className="fa-solid fa-check px-2 duration-300 hover:scale-125 cursor-pointer"
                    ></i>
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Training1st;
