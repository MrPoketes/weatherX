import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
// Logger is not supported for React Native
import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk,logger)
);
export default store;