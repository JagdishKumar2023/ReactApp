import React, { createContext, useState } from "react";

export const FormContext = createContext();

const ContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SubmitForm", inputValue);
  };

  //   console.log(inputValue);

  return (
    <FormContext.Provider value={{ inputValue, handleChange, handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
};

export default ContextProvider;
