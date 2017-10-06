import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Route, Router} from "react-router-dom";
import {applyMiddleware, createStore, Store as ReduxStore} from "redux";
import reduxThunk from "redux-thunk";

import "./images/favicon.ico";
import "./style/scss/all.scss";

import {Daniel} from "./components/Daniel";
import {MachineLearning} from "./components/machinelearning/MachineLearning";
import history from "./historyCreator";
// import {reducers} from "./reducers/index";
import {Store} from "./store/store";
import {Projects} from "./components/Projects";

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store: ReduxStore<Store.All> = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route exact={true} path="/" component={Daniel}/>
      <Route path="/projects" component={Projects}/>
    </div>
  </Router>
  , document.getElementById("root"));
