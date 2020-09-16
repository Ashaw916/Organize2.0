import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  auth: "invalid",
  error: null,
};

const Store = ({ Provider }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{Provider}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
