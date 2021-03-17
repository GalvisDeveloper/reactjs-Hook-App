import { useState } from "react";

export const useCounter = (initialState) => {
  const [state, setState] = useState(initialState);

  const increment = (factor) => {
    setState(state + factor);
  };

  const decrement = (factor) => {
    setState(state - factor);
  };

  const resetCounter = () => {
    setState(initialState);
  };

  return {
    state,
    increment,
    decrement,
    resetCounter
  };
};
