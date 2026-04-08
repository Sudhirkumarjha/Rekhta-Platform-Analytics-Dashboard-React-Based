
    // const numbers=[];
    // let y= 13;
    // for( let i=y; i<=y*10; i=i+y){
    //     numbers.push( <h2 key={i}> count={i} </h2> )
    // }

    // return (<div>
    //         {numbers}
    //         <p>please enter a number </p>
    //         </div>)

//     import { useState } from "react";

// function TestDemo() {
//   const [num, setNum] = useState(0);   // ✅ define num here

//   const numbers = [];

//   if (num > 0) {
//     for (let i = num; i <= num * 10; i = i + num) {
//       numbers.push(<h2 key={i}>count = {i}</h2>);
//     }
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={num}
//         onChange={(e) => setNum(Number(e.target.value))}
//       />

//       <p>Table of {num}</p>

//       {numbers}
//     </div>
//   );
// }

import { useState } from "react";

function TestDemo() {
  const [num, setNum] = useState("");

  const numbers = [];
  const n = parseInt(num);  // ✅ convert once

  if (n > 0) {
    for (let i = n; i <= n * 10; i = i + n) {
      numbers.push(<h2 key={i}>count = {i}</h2>);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <p>Table of {n || 0}</p>

      {numbers}
    </div>
  );
}

export default TestDemo;

