import React from "react";
import { useState } from "react";

const Body = () => {
  return (
    <div className="flex justify-center items-center ">
      <body>
        <p>this is a thing</p>
      </body>
    </div>
  );
};
const Form = () => {
    const [workout , setWorkout] = useState ("")
    console.log(workout);
  return (
    <div className="flex justify-center items-center">
    <form >
      <label>
        Enter your workout :  
        <input className="border-2 border-blue-800 pl-3 "
         type="text"
         value={workout}
         onChange={(e) => setWorkout(e.target.value)} />
      </label>
    </form>
    <p>{workout}</p>
    </div>

  );
};

export { Body, Form };
