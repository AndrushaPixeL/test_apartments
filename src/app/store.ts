import { applyMiddleware, createStore } from "redux";
import { createReducerFunction } from "immer-reducer";
import MyImmerReducer, {
  MyImmerReducerInitialStateInt,
  myImmerReducerInitialState,
} from "../redux/appReducer";
import thunk from "redux-thunk";

export type GlobalState = MyImmerReducerInitialStateInt;

const reducerFunction = createReducerFunction(
  MyImmerReducer,
  myImmerReducerInitialState
);

export const store = createStore(reducerFunction, applyMiddleware(thunk));
