import React, { useState } from "react";
import { render } from "react-dom";

const Application: React.FC<{}> = () => {
  const [a, setA] = useState(0);
  return (
    <>
      <h1>Application Whatever {a}</h1>
      <button onClick={() => setA(a + 1)}>+</button>
      <button onClick={() => setA(a - 1)}>-</button>
    </>
  );
};

render(<Application />, document.getElementById("root"));
