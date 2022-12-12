import { ADECREMENT, AINCREMENT } from "./actionTypes";

export const increment = (value) => {
  return {
    type: AINCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: ADECREMENT,
    payload: value,
  };
};
