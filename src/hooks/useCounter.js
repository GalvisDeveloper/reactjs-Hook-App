import { useState } from "react";

export const useCounter = (initialState = 0) => {
  const [counter, setState] = useState(initialState);

  const increment = (factor) => {
    setState(counter + factor);
  };

  const decrement = (factor) => {
    setState(counter - factor);
  };

  const resetCounter = () => {
    setState(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    resetCounter,
  };
};
