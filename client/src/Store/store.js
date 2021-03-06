import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./Reducers/rootReducer";

export default createStore(rootReducer, {}, compose(applyMiddleware(thunk)));
