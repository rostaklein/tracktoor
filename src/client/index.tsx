import { Button } from "antd";
import React, { useState } from "react";
import { render } from "react-dom";

import "./style/index.less";

const Application: React.FC<{}> = () => {
  const [a, setA] = useState(0);
  return (
    <>
      <h1>Application Whatever {a}</h1>
      <Button onClick={() => setA(a + 1)} type="primary">
        +
      </Button>
      <Button onClick={() => setA(a - 1)}>-</Button>
    </>
  );
};

render(<Application />, document.getElementById("root"));
