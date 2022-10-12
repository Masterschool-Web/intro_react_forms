import { useState, useEffect } from "react";
import React from "react";

const ControlledForm = () => {
  //In this controlled component, we will create a state variable for our input
  const [email, updateEmail] = useState("");

  return (
    <>
      <form>
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          //Setting the value of the input to the email value in state is what makes this input controlled
          //the text this input contains will be the value of its state variable
          value={email}
          //Controlled inputs also have an onChange handler that updates state as a user types
          //This creates a two-way binding between the value of the input and the value of the state variable
          onChange={(e) => updateEmail(e.target.value)}
          //   The values of the input element is controlled by React state;
          //the state becomes the “single source of truth” for the input elements.
        />
        <button>Submit</button>
        <p>Form Value: {email}</p>
      </form>
    </>
  );
};
//Controlled components allow you to do:
//form validation while user is typing
//EXAMPLE:
//   useEffect(() => {
//     !email.includes("@")
//       ? console.log("Incorrect email formatting.")
//       : console.log("Correct email formatting");
//   }, [email]);
export default ControlledForm;
