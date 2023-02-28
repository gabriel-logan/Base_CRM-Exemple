import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}
export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}
export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}

export function updateRequest(payload) {
  return {
    type: types.UPDATE_REQUEST,
    payload,
  };
}
export function updateFailure(payload) {
  return {
    type: types.UPDATE_FAILURE,
    payload,
  };
}
export function updateSuccess(payload) {
  return {
    type: types.UPDATE_SUCCESS,
    payload,
  };
}
