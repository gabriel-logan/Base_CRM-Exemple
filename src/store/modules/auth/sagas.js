import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/login', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Logou com sucesso');

    axios.defaults.headers.authorization = `Bearer ${response.data.Token}`;
  } catch (error) {
    toast.error('Usuario ou senha invalidos');

    yield put(actions.loginFailure());
  }
}

function persistReHydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.authorization = `Bearer ${token}`;
}

function* updateRequest({ payload }) {
  const { name, password } = payload;

  try {
    if (name) {
      yield call(axios.put, '/users', {
        name, password: password || undefined,
      });
      toast.success('Configurações alteradas com sucesso');
      yield put(actions.updateSuccess({ name, password }));
      yield put(actions.loginFailure());
      toast.info('Você precisa fazer login novamente');
    }
  } catch (error) {
    const errors = get(error, 'response.data.error', []);

    if (errors.length > 0) {
      errors.map((err) => toast.warn(err));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.updateFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistReHydrate),
  takeLatest(types.UPDATE_REQUEST, updateRequest),
]);
