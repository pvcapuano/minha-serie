import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useAuth } from "context/AuthContext";
import Card from "../Card";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

const UserDashboard = () => {
  const { userInfo, currentUser } = useAuth();
  const [edit, setEdit] = useState(null);
  const [todo, setTodo] = useState("");
  const [kilos, setKilos] = useState("");
  const [round, setRound] = useState("");
  const [todoList, setTodoList] = useState({});

  //new
  const [trainingList, setTrainingList] = useState([]);
  const trainingCollectionRef = collection(db, "training");
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
    getTrainingList();
    setEditExercise(false);
  };

  //update exercise value
  const handleUpdateExercise = () => {
    performUpdateExercise(updatedExerciseValue);
    setUpdatedExerciseValue("");
    setEditExercise(false);
  };

  const performUpdateExercise = (newExerciseValue, id) => {
    // Do something with the new exercise value, like save it to a database
    console.log("New exercise value:", newExerciseValue);
  };

  return (
    <>
      <Head>
        <title>My Workout | Training</title>
      </Head>

      <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5">
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
            <div /* className="p-2 relative sm:p-3 border flex items-stretch border-white border-solid " */
            >
              {!editExercise ? (
                <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex justify-between items-center bg-white gap-3 sm:gap-5">
                  <div className="outline-none p-2 text-black bg-white  sm:text-lg w-3/6 ">
                    {training.exercise}
                  </div>
                  <div className="outline-none p-2 text-black bg-white  sm:text-lg w-1/6 ">
                    {training.kilos}
                  </div>
                  <div className="outline-none p-2 text-black bg-white  sm:text-lg w-1/6">
                    {training.round}
                  </div>
                  <div className="w-fit px-4 sm:px-6 py-2 sm:py-3 text-black font-medium text-base flex justify-between ">
                    <i
                      onClick={() => setEditExercise(true)}
                      className="fa-solid fa-pencil px-2 duration-300 hover:rotate-45 cursor-pointer"
                    ></i>
                    <button onClick={() => deleteTraining(training.id)}>
                      <i className="fa-solid fa-trash-can px-2 duration-300 hover:scale-125 cursor-pointer"></i>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex justify-between items-center bg-white gap-3 sm:gap-5">
                  <input
                    onChange={(e) => setUpdatedExerciseValue(e.target.value)}
                    className="outline-none p-2 text-black bg-white  sm:text-lg w-3/6 "
                  />
                  <input
                    onChange={(e) => setUpdatedKilos(e.target.value)}
                    className="outline-none p-2 text-black bg-white  sm:text-lg w-1/6"
                  />
                  <input
                    onChange={(e) => setUpdatedRound(e.target.value)}
                    className="outline-none p-2 text-black bg-white  sm:text-lg w-1/6"
                  />
                  <div className="w-fit px-4 sm:px-6 py-2 sm:py-3 text-black font-medium text-base flex justify-between ">
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

export default UserDashboard;
