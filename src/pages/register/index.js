import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Link, Navigate } from 'react-router-dom';
import { get } from 'lodash';
import { useSelector } from 'react-redux';
import { FormStyles } from '../../styles/forms/formStyles';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import history from '../../services/history';

export default function Register() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [isLoading, setIsLoading] = useState(false);

  if (isLoggedIn) {
    return Navigate({ to: '/' });
  }

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const formSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line prefer-const
    let errors = false;

    if (name.length < 1) {
      errors = true;
      toast.warn('Campo nome não pode ser vasio');
    }
    if (name.length < 3) {
      errors = true;
      toast.warn('Nome tem que ter mais que 3 caracteres');
    }
    if (name.length > 10) {
      errors = true;
      toast.warn('Nome não pode ultrapassar 10 caracteres');
    }
    if (/\w+\s/g.test(name) === true) {
      errors = true;
      toast.warn('Nome não pode conter espaços');
    }
    if (password.length < 1) {
      errors = true;
      toast.warn('Campo senha não pode ser vasio');
    }
    if (password.length < 5) {
      errors = true;
      toast.warn('Senha tem que ter mais que 5 caracteres');
    }
    if (password.length > 300) {
      errors = true;
      toast.warn('Senha não pode ultrapassar 300 caracteres');
    }
    if (errors) return;
    setIsLoading(true);
    try {
      await axios.post('/register', {
        name,
        password,
      });
      setIsLoading(false);

      toast.success('Conta criada com sucesso !');

      setTimeout(() => {
        history.push('/login', () => {});
      }, 1000);
    } catch (error) {
      // eslint-disable-next-line no-unused-vars
      const status = get(error, 'response.status', 0);
      const errorsGet = get(error, 'response.data.errors', []);
      if (errorsGet) {
        setIsLoading(false);
        // eslint-disable-next-line consistent-return
        return errorsGet.map((errorsReturned) => toast.error(errorsReturned));
      }
      setIsLoading(false);

      toast.error('Erro desconhecido');
    }
  };
  return (
    <FormStyles>
      <Loading isLoading={isLoading} />
      <div id="base">
        <h3>
          Registro
        </h3>
      </div>
      <div id="div_form">
        <form onSubmit={formSubmit} action="/register" method="post">
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
          <button type="submit">Cadastrar</button>
        </form>
        <Link to="/login">Fazer login</Link>
      </div>
    </FormStyles>
  );
}
