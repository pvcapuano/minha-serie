import React, { useState } from "react";
import Modal from "../Modal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="sticky top-0 w-full left-0 bg-black flex items-center justify-between p-4 border-b border-solid border-white">
        <h1 className="text-2xl select-none sm:text-3xl font-bold">
          MyWorkout
        </h1>
        <i
          onClick={() => setOpenModal(true)}
          className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-2xl"
        ></i>
      </div>
    </>
  );
};

export default Navbar;
