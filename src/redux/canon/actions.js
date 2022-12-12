import { CDECREMENT, CINCREMENT } from "./actionTypes";

export const increment = (value) => {
  return {
    type: CINCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: CDECREMENT,
    payload: value,
  };
};
