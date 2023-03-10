import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editePost, removePost } from "../features/formSlice";
import { Allvalues } from "./FormContext";
import { BiEdit } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

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
      <div
        key={id}
        className="flex gap-4 border-[3px] p-1 border-white bg-[#defdffe8] rounded-lg"
      >
        <div className="w-[60%]">
          {" "}
          <h2 className="font-font-2 text-xl">
            {id + 1}
            {".)"} {itemes}
          </h2>
        </div>
        <button
          onClick={() => dispatch(removePost({ id }))}
          className="text-red-900 hover:text-green-700 text-center p-1 rounded-lg"
        >
          <AiFillCloseCircle size={"23px"} />
        </button>
        <button
          onClick={() => editeTheNotes(itemes, id)}
          // onClick={() => setTexts(itemes) && setOpen(!open)}
          className="text-blue-900 hover:text-green-700  text-center p-1 rounded-lg"
        >
          <BiEdit size={"23"} />
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
        <h1 className="text-2xl font-semibold font-signature-1">
          Nothing Here
        </h1>
      )}
    </div>
  );
};

export default ListOfNotes;
