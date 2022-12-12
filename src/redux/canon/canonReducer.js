import { CDECREMENT, CINCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
  quantity: 72,
  price: 36500,
  count: 0,
};

const canonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CINCREMENT:
      if (state.value < 72) {
        return {
          ...state,
          count: state.price * (state.value + action.payload),
          value: state.value + action.payload,
          quantity: state.quantity - action.payload,
        };
      } else {
        alert("storage full");
      }
      break;

    case CDECREMENT:
      if (state.value > 0) {
        return {
          ...state,
          count: state.price * (state.value - action.payload),
          value: state.value - action.payload,
          quantity: state.quantity + action.payload,
        };
      } else {
        alert("number cant be negative");
      }
      break;
    default:
      return state;
  }
};

export default canonReducer;
