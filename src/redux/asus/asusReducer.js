import { ADECREMENT, AINCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
  quantity: 20,
  price: 35500,
  count: 0,
};

const asusReducer = (state = initialState, action) => {
  switch (action.type) {
    case AINCREMENT:
      if (state.value < 20) {
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

    case ADECREMENT:
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

export default asusReducer;
