import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { editePost, submit } from "../features/formSlice";
import { Allvalues } from "./FormContext";

const Form = () => {
  const dispatch = useDispatch();
  // const [texts, setTexts] = useState("enter Here");
  const { texts, setTexts, open, postNo, setOpen } = useContext(Allvalues);
  function editeAll() {
    dispatch(editePost({ postNo, texts }));
    setTexts("");
    setOpen(false);
  }
  const addAlltext = () => {
    dispatch(submit({ texts }));
    setTexts("");
  };
  return (
    <div className="flex gap-6">
      <input
        value={texts}
        onChange={(e) => setTexts(e.target.value)}
        className="border-[2px] p-1 w-[170px] md:w-auto"
        type="text"
      />
      {open ? (
        <button
          onClick={() => editeAll()}
          className="bg-teal-800 text-white text-center p-2"
        >
          Edite Notes
        </button>
      ) : (
        <button
          className="bg-teal-800 text-white text-center p-2"
          onClick={() => addAlltext()}
        >
          Add notes
        </button>
      )}
    </div>
  );
};

export default Form;
