import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { toast } from "react-toastify";
import CardItem from "@/components/CardItem";
import Input from "@/components/Input";

const Training2nd = (userId) => {
  /* const trainingCollectionRef = collection(db, "trainingtwo"); */

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
  const [editExerciseId, setEditExerciseId] = useState(null);

  /* useEffect(() => {
    getTrainingList();
  }, []); */

  /* const getTrainingList = async () => {
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
  }; */

  const addTodo = (newTodo) => {
    return setDoc(doc(db, "users", userId, "todos", newTodo.id), {
      newTodo: "teste",
      round: "5",
      kilos: "2",
    });
  };

  const onSubmitTraining = (newTraining) => {
    /* try {
      await addDoc(trainingCollectionRef, {
        exercise: newExercise,
        kilos: newKilos,
        round: newRound,
      });

      
    } catch (err) {
      console.error(err);
    } */
    return setDoc(doc(db, "users", userId, "workout", "workoutId"), {
      exercise: newExercise,
      round: newKilos,
      kilos: newRound,
    });
  };

  const deleteTraining = async (id) => {
    const trainingDoc = doc(db, "trainingtwo", id);
    await deleteDoc(trainingDoc);
  };

  const editTraining = (id) => {
    setEditExerciseId(id);
  };

  const updateTraining = async (id) => {
    const trainingDoc = doc(db, "trainingtwo", id);

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
        <title>My Workout | Workout 2</title>
      </Head>

      <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5">
        <Link href="/">
          <i className="fa-solid fa-arrow-left"></i>
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
            className="outline-none p-2 text-black  sm:text-lg w-1/6 "
          />
          <input
            type="number"
            placeholder="Round"
            onChange={(e) => setNewRound(Number(e.target.value))}
            className="outline-none p-2 text-black sm:text-lg w-1/6"
          />

          <button
            onClick={addTodo}
            className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40"
          >
            Add
          </button>
        </div>

        <div>
          {trainingList.map((training) => (
            <div>
              <CardItem
                key={training.id}
                training={training}
                editExerciseId={editExerciseId}
                updatedExerciseValue={updatedExerciseValue}
                setUpdatedExerciseValue={setUpdatedExerciseValue}
                updatedKilos={updatedKilos}
                setUpdatedKilos={setUpdatedKilos}
                updatedRound={updatedRound}
                setUpdatedRound={setUpdatedRound}
                updateTraining={updateTraining}
                cancelEditTraining={cancelEditTraining}
                deleteTraining={deleteTraining}
                editTraining={editTraining}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Training2nd;
