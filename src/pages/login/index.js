import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';

import { FormStyles } from '../../styles/forms/formStyles';

import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';

export default function Login() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();

    let errors = false;

    try {
      if (name.length < 3) {
        errors = true;
        toast.warn('Usuario invalido');
      }
      if (name.length > 10) {
        errors = true;
        toast.warn('Nome não pode ultrapassar 10 caracteres');
      }
      if (/\w+\s/g.test(name) === true) {
        errors = true;
        toast.warn('Nome não pode conter espaços');
      }
      if (password.length < 5 || password.length > 300) {
        errors = true;
        toast.warn('Senha invalida');
      }

      if (errors) return;

      if (isLoggedIn) {
        Navigate({ to: '/' });
      }

      dispatch(actions.loginRequest({ name, password }));
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <FormStyles>
      <Loading isLoading={isLoading} />
      <div id="base">
        <h3>
          Login
        </h3>
      </div>
      <div id="div_form">
        <form onSubmit={formSubmit} action="/login" method="post">
          <label htmlFor="name">
            Username:
            <input
              value={name}
              onChange={(e) => { setName(e.target.value); }}
              type="text"
              id="name"
              name="name"
              placeholder="Ex. Logan"
              title="Digite seu username"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              value={password}
              onChange={(e) => { setPassword(e.target.value); }}
              type="password"
              id="password"
              name="password"
              placeholder="Ex. 123456"
              title="Digite sua senha"
            />
          </label>
          <button type="submit">Login</button>
        </form>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </FormStyles>
  );
}
