import React from "react";

const CardItem = ({
  training,
  editExerciseId,
  updatedExerciseValue,
  setUpdatedExerciseValue,
  updatedKilos,
  setUpdatedKilos,
  updatedRound,
  setUpdatedRound,
  updateTraining,
  cancelEditTraining,
  deleteTraining,
  editTraining,
}) => {
  return (
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
              onChange={(e) => setUpdatedKilos(Number(e.target.value))}
              className="w-20 mr-3 p-1 text-black placeholder:p-2"
            />
            <input
              value={updatedRound}
              type="number"
              placeholder="Round"
              onChange={(e) => setUpdatedRound(Number(e.target.value))}
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
  );
};

export default CardItem;
