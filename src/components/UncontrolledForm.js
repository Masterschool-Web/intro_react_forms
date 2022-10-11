import { useRef } from "react";
import React from "react";

export const UncontrolledForm = () => {
  //The useRef Hook allows you to persist values between renders.
  // It can be used to store a mutable value that does not cause a re-render when updated.
  // It can be used to access a DOM element directly.
  const nameInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Enter first and last name"
        //In React, we can add a ref attribute to an element to access it directly in the DOM.
        ref={nameInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
