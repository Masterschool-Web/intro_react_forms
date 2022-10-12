import { useRef } from "react";
import React from "react";
// There is no updating or altering of states when the input values are uncontrolled.
// Uncontrolled components keep track of their internal state, which means the component remembers what you entered into the field.
//That value can be manipulated by utilizing the ref keyword to fetch it whenever it is needed.
//The value you submit is the value you get with uncontrolled inputs.
// Refs allow you to access DOM nodes or React elements formed during the render process.

// Uncontrolled components behave more like HTML form elements.
//The DOM, not the component, stores the data for each input element.
//Each input tracks its own state until we click submit - this makes the component uncontrolled.
export const UncontrolledForm = () => {
  //The useRef Hook allows you to persist values between renders.
  // It can be used to store a mutable value that does not cause a re-render when updated.
  // It can be used to access a DOM element directly.
  //useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ).
  //The returned object will persist for the full lifetime of the component.
  //Essentially, useRef is like a “box” that can hold a mutable value in its.current property.
  //In this example, we have a ref attribute called nameInput
  //When we initialize useRef we set the initial value: useRef(initial value).
  const nameInput = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    //We can access the value of the nameInput by referencing nameInput.current.value
    console.log(nameInput);
    console.log(nameInput.current);
    console.log(nameInput.current.value);
    console.log(nameInput.current.name);
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
