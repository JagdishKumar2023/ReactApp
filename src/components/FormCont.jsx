import React, { useContext } from "react";
import { FormContext } from "./ContextProvider";

const FormCont = () => {
  const { inputValue, handleChange, handleSubmit } = useContext(FormContext);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Form</h2>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={handleChange}
          value={inputValue.name}
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={inputValue.email}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
          value={inputValue.password}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormCont;
