import { combineReducers } from "redux";

const initialState = {
  floor: "G"
};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ELEVATE":
      return {
        ...state,
        floor: action.name
      };
    default:
      return state;
  }
};

export default combineReducers({
  buttonReducer
});
