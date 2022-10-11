import React, { useState } from "react";
function ControlledForm() {
  const [value, setValue] = useState("");
  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleSubmit(event) {
    alert("A name was submitted: " + value);
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default ControlledForm;
