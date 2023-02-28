import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
  isLoggedIn: false,
  token: false,
  id: 0,
  user: {},
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.Token;
      newState.user = action.payload.name;
      newState.id = action.payload.id;
      newState.isLoading = false;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.authorization;
      const newState = { ...initialState };
      return newState;
    }
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.UPDATE_SUCCESS: {
      const newState = { ...state };
      newState.user = action.payload.name;
      newState.isLoading = false;
      return newState;
    }
    case types.UPDATE_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case types.UPDATE_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    default: {
      return state;
    }
  }
}
