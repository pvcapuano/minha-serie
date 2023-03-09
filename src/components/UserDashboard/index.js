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
  const [updatedExercise, setUpdatedExercise] = useState("");
  const [updatedKilos, setUpdatedKilos] = useState("");
  const [updatedRound, setUpdatedRound] = useState("");

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
    await updateDoc(trainingDoc, { exercise: updatedExercise });
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
            <div>
              <h1>{training.exercise}</h1>
              <h1>{training.kilos}</h1>
              <h1>{training.round}</h1>

              <button onClick={() => deleteTraining(training.id)}>
                delete
              </button>

              <input onChange={(e) => setUpdatedExercise(e.target.value)} />
              <button onClick={() => updateTraining(training.id)}>
                {" "}
                atualizar
              </button>
            </div>
          ))}
        </div>
        {/* {!userInfo && (
          <>
            {Object.keys(todoList).map((item, i) => (
              <div key={i}>
                <p>testando</p>
                <h1>{item.todo}</h1>
                <h1>{item.kilos}</h1>
                <h1>{item.round}</h1>
              </div>
            ))}
          </>
        )} */}
      </div>
    </>
  );
};

export default UserDashboard;
