/* eslint-disable prettier/prettier */
import {SIGN_IN, SIGN_OUT} from '../actions/auth';

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
  }
  return state;
};

export default authReducer;
