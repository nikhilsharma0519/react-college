import React, { use } from "react";
// import { useRef } from "react";

// function myfunction() {
//   const box = useRef(0);

//   const update = () => {
//     box.current = 1000;
//     console.log("update", box.current);
//   };

//   return (
//     <div>
//       <button onClick={update}>Update</button>
//     </div>
//   );
// }

// export default myfunction;
import { createContext, useContext } from "react";

const MyContext = createContext("arjun");

function mycontext() {
  const value = useContext(MyContext);

  return (
    <div>
      <h1>Value from context: {value}</h1>
    </div>
  );
}

export default mycontext;