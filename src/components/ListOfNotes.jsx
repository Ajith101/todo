import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editePost, removePost } from "../features/formSlice";
import { Allvalues } from "./FormContext";

const ListOfNotes = () => {
  const { setTexts, texts, setOpen, open, postNo, setPostNo } =
    useContext(Allvalues);
  const dispatch = useDispatch();
  const { formDatas } = useSelector((state) => state.form);
  function editeTheNotes(value, id) {
    setTexts(value), setOpen(true);
    setPostNo(id);
  }
  const displayNotes = formDatas.map((itemes, id) => {
    return (
      <div key={id} className="flex gap-4">
        <h2>
          {id + 1}
          {".)"} {itemes}
        </h2>{" "}
        <button
          onClick={() => dispatch(removePost({ id }))}
          className="bg-red-800 text-white text-center p-1 rounded-lg"
        >
          {" "}
          x
        </button>
        <button
          onClick={() => editeTheNotes(itemes, id)}
          // onClick={() => setTexts(itemes) && setOpen(!open)}
          className="bg-red-800 text-white text-center p-1 rounded-lg"
        >
          edit
        </button>
      </div>
    );
  });

  return (
    <div className="flex flex-col my-5 gap-5">
      {formDatas.length != 0 ? (
        <>
          <h1 className="text-2xl font-semibold">List Of Notes</h1>{" "}
          <div className="flex flex-col gap-3">{displayNotes}</div>
        </>
      ) : (
        <h1 className="text-2xl font-semibold">Nothing Here</h1>
      )}
    </div>
  );
};

export default ListOfNotes;
