import { ApolloProvider } from "@apollo/react-common";
import { Button } from "antd";
import React, { useState } from "react";
import { render } from "react-dom";

import { client } from "./ApolloClient";
import { AuthWrapper } from "./components/AuthWrapper";
import { AppContextProvider } from "./context/AppContext";

import "./style/index.less";

const Application: React.FC<{}> = () => {
  const [a, setA] = useState(0);
  return (
    <>
      <ApolloProvider client={client}>
        <AppContextProvider>
          <AuthWrapper>
            <h1>Application Whatever {a}</h1>
            <Button onClick={() => setA(a + 1)} type="primary">
              +
            </Button>
            <Button onClick={() => setA(a - 1)}>-</Button>
          </AuthWrapper>
        </AppContextProvider>
      </ApolloProvider>
    </>
  );
};

render(<Application />, document.getElementById("root"));
