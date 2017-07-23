import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/app";

import "./images/favicon.ico";
import "./style/scss/all.scss";

const renderRoot = (app: JSX.Element) => {
  ReactDOM.render(app, document.getElementById("root"));
};

if (process.env.NODE_ENV === "production") {
  renderRoot((
    <App />
  ));
} else {
  const HotContainer = require("react-hot-loader").AppContainer;
  renderRoot((
    <HotContainer>
      <App />
    </HotContainer>
  ));

  if (module.hot) {
    module.hot.accept("./app", async () => {
      const NextApp = (await System.import("./components/app")).App;
      renderRoot((
        <HotContainer>
          <NextApp />
        </HotContainer>
      ));
    });

    // reducers
    // module.hot.accept("../modules/root-reducer", () => {
    //   const newRootReducer = require("./root-reducer").default;
    //   store.replaceReducer(newRootReducer);
    // });
  }
}
