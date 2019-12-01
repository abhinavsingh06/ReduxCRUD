import { REGISTER, UPDATE, DELETE, USER_LIST } from "../actions/types";

const INITIAL_STATE = {};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LIST:
      return {
        ...state
      };
    case REGISTER:
      return {
        ...state
      };
    case UPDATE:
      return {};
    case DELETE:
      return {};
    default:
      return state;
  }
};

export default Reducer;
