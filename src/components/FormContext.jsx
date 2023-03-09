import React, { createContext, useState } from "react";

export const Allvalues = createContext();

const FormContext = ({ children }) => {
  const [texts, setTexts] = useState("enter Here");
  const [open, setOpen] = useState(false);
  const [postNo, setPostNo] = useState();
  return (
    <Allvalues.Provider
      value={{ texts, setTexts, open, setOpen, postNo, setPostNo }}
    >
      {children}
    </Allvalues.Provider>
  );
};

export default FormContext;
