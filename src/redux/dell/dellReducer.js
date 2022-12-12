import { DDECREMENT, DINCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
  quantity: 35,
  price: 9300,
  count: 0,
};

const dellReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      if (state.value < 35) {
        return {
          ...state,
          count: state.price * (state.value + action.payload),
          value: state.value + action.payload,
          quantity: state.quantity - action.payload,
        };
      } else {
        alert("storage Full");
      }
      break;
    case DDECREMENT:
      if (state.value < 0) {
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

export default dellReducer;
