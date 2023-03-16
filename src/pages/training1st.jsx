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
  const [editExercise, setEditExercise] = useState(false);

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

  const updateTraining = async (id) => {
    const trainingDoc = doc(db, "training", id);
    await updateDoc(trainingDoc, {
      exercise: updatedExerciseValue,
      kilos: updatedKilos,
      round: updatedRound,
    });
    setEditExercise(false);
    getTrainingList();
  };

  return (
    <>
      <Head>
        <title>My Workout | 1st Training</title>
      </Head>

      <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5">
        <Link href="/">
          <i class="fa-solid fa-arrow-left"></i>
          Voltar
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
              {!editExercise ? (
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
                    value={training.exercise}
                    placeholder="Exercise"
                    onChange={(e) => setUpdatedExerciseValue(e.target.value)}
                    className="flex-initial flex"
                  />
                  <input
                    value={training.kilos}
                    placeholder="Kg"
                    onChange={(e) => setUpdatedKilos(e.target.value)}
                    className="flex-2 flex"
                  />
                  <input
                    value={training.round}
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
              )}

              {/* <input onChange={(e) => setUpdatedExercise(e.target.value)} />
      <button onClick={() => updateTraining(training.id)}>
        atualizar
      </button>

      <button onClick={() => deleteTraining(training.id)}>
        <i className="fa-solid fa-trash-can px-2 duration-300 hover:scale-125 cursor-pointer"></i>
      </button> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Training1st;
