import { ADECREMENT, AINCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
};

const asusReducer = (state = initialState, action) => {
  switch (action.type) {
    case AINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case ADECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

export default asusReducer;
