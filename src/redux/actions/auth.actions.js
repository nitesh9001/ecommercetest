import { LOGIN, REVOKE_TOKEN, SET_USER, UPDATE_USER } from "../actionTypes";

export const setUser = (payload) => {
    return {
      type: SET_USER,
      payload,
    };
  };
  export const setToken = (payload) => {
    return {
      type: LOGIN,
      payload,
    };
  };
  export const updateUser = (payload) => {
    return {
      type: UPDATE_USER,
      payload,
    };
  };
  export const revokeToken = () => {
    return {
      type: REVOKE_TOKEN,
    };
  };