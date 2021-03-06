import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/main.css";
import "animate.css/animate.min.css";
import "lightbox2/dist/css/lightbox.min.css";

import "lightbox2/dist/js/lightbox-plus-jquery.min";

// Import Store
import store from "./Store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
