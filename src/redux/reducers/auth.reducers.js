import { SET_USER, UPDATE_USER, LOGIN, REVOKE_TOKEN } from "../actionTypes";

const initialState = {
  user: null,
  token: null,
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token : action.payload.token };
    case REVOKE_TOKEN:
      return { ...state, ...initialState };
    case SET_USER:
      return { ...state };
    case UPDATE_USER:
      return { ...state };
    default:
      return state;
  }
};
