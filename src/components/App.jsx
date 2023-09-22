import React, { useState } from "react";

function App() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  function handleChange(event) {
    setFName(event.target.value);
  }

  function handleChangelast(event) {
    setLName(event.target.value);
  }

  return (
    <div className="container">
      <h1 onClick>
        Hello {fname} {lname}
      </h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          value={fname}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChangelast}
          type="text"
          value={lname}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
