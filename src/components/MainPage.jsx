import React, { useContext } from "react";
import Form from "./Form";
import { Allvalues } from "./FormContext";
import ListOfNotes from "./ListOfNotes";

const MainPage = () => {
  return (
    <section className="md:p-14 w-full h-full md:h-auto md:my-0 flex flex-col justify-center items-center">
      <div className="md:w-[60%] w-[90%] my-5 bg-yellow-200 rounded-lg p-4">
        <h1 className="text-2xl font-bold font-font-2">
          Add Your Favorite notes Here
        </h1>
        <Form />
        <ListOfNotes />
      </div>
    </section>
  );
};

export default MainPage;
