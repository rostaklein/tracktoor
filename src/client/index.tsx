import { ApolloProvider } from "@apollo/react-common";
import React from "react";
import { render } from "react-dom";

import "./i18n";

import { client } from "./ApolloClient";
import { AuthWrapper } from "./components/AuthWrapper";
import "./style/index.less";
import { MainWrapper } from "./components/MainWrapper";
import { AppContextProvider } from "./context/AppContext";

const Application: React.FC<{}> = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <AppContextProvider>
          <AuthWrapper>
            <MainWrapper />
          </AuthWrapper>
        </AppContextProvider>
      </ApolloProvider>
    </>
  );
};

if (module.hot) {
  module.hot.accept();
}

render(<Application />, document.getElementById("root"));
