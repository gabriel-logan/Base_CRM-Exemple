/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import SettingsStyles from './styled';

import Loading from '../../components/Loading';

import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';

export default function Settings() {
  const userNameLogged = useSelector((state) => state.auth.user);

  const [isLoading, setIsLoading] = useState(false);

  const [password, setPassword] = useState('');
  const [presentPassword, setPresentPassword] = useState('');
  const [openPassEditValue, setOpenPassEdit] = useState(false);
  const [openDeleteOptionsValue, setDeleteOptions] = useState(false);
  const [openSureDeleteValue, setSureDelete] = useState(false);
  const [openPassValidationValue, setPassValidation] = useState(false);
  const [passToDelete, setPassToDelete] = useState('');

  const dispatch = useDispatch();

  const openPassEdit = () => {
    setOpenPassEdit(!openPassEditValue);
  };

  const openDeleteOptions = () => {
    setDeleteOptions(!openDeleteOptionsValue);
  };

  const openSureDelete = () => {
    setSureDelete(!openSureDeleteValue);
  };

  const handleDelete = () => {
    setPassValidation(!openPassValidationValue);
  };

  const closeAllQuestions = () => {
    handleDelete();
    openDeleteOptions();
    openSureDelete();
  };

  const openPassValidation = async (e) => {
    e.preventDefault();

    let errors = false;

    if (passToDelete.length < 1) {
      errors = true;
      toast.info('Senha não pode ser vasia');
    }

    if (passToDelete.length > 300) {
      errors = true;
      toast.info('Senha incorreta');
    }

    if (errors) return;
    setIsLoading(true);

    try {
      await axios.post(
        '/verifyPassChange',
        { name: userNameLogged, password: passToDelete },
      );
      await axios.delete('/users');

      dispatch(actions.loginFailure());
      setIsLoading(false);

      toast.success('Usuario apagado permanentemente');
    } catch (error) {
      const getError = get(error, 'response.data.errors', []);
      setIsLoading(false);

      if (getError.length > 0) {
        getError.map((err) => toast.info(err));
      } else {
        toast.error('Erro ao tentar deletar a conta');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = false;

    try {
      if (password.length < 1 || presentPassword.length < 1) {
        errors = true;
        toast.warn('Nenhum campo pode ser vasio');
      }

      if (password.length < 5 || password.length > 300) {
        errors = true;
        toast.warn('Senha não pode ser maior que 300 ou menor que 5');
      }
      if (presentPassword.length < 5 || presentPassword.length > 300) {
        errors = true;
        toast.warn('Nova senha não pode ser maior que 300 ou menor que 5');
      }

      setIsLoading(true);

      await axios.post('/verifyPassChange', { name: userNameLogged, password: presentPassword });

      setIsLoading(false);

      if (password === presentPassword) {
        errors = true;
        toast.warn('A nova senha não pode ser igual a senha atual');
      }

      if (errors) return;

      dispatch(actions.updateRequest({ name: userNameLogged, password }));
    } catch (error) {
      setIsLoading(false);

      const getError = get(error, 'response.data.errors', []);
      if (getError.length > 0) {
        getError.map((err) => toast.info(err));
      } else {
        toast.error('Error Desconhecido');
      }
    }
  };

  return (
    <SettingsStyles>
      <Loading isLoading={isLoading} />
      <h1>Suas configurações Configurações</h1>
      <div id="all_configs">
        <div>
          <div>
            <h3 onClick={openPassEdit} title="Clique para abrir a edição">Editar senha atual</h3>
          </div>
          {openPassEditValue ? (
            <div>
              <form onSubmit={handleSubmit} action="/settings" method="put">
                <label htmlFor="presentPassword">
                  Sua senha atual
                  <input
                    type="password"
                    placeholder="Sua senha atual"
                    name="presentPassword"
                    id="presentPassword"
                    value={presentPassword}
                    onChange={(e) => { setPresentPassword(e.target.value); }}
                  />
                </label>
                <label htmlFor="password">
                  Sua nova senha
                  <input
                    type="password"
                    placeholder="Sua nova senha"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); }}
                  />
                </label>
                <button type="submit">Salvar</button>
              </form>
            </div>
          ) : ('')}
        </div>
        <div>
          <div><h3 onClick={openDeleteOptions} title="Clique para apagar sua conta permanente">Apagar Conta</h3></div>
          {openDeleteOptionsValue ? (
            <div>
              {openPassValidationValue ? (
                <button onClick={closeAllQuestions} type="button">Voltar</button>
              ) : (
                <button onClick={openSureDelete} type="button">Apagar</button>
              )}
              {openSureDeleteValue ? (
                <div>
                  Voce tem certesa ?
                  {' '}
                  {openPassValidationValue ? (
                    <>
                      <form onSubmit={openPassValidation}>
                        <label htmlFor="passValidationDelete">
                          Digite sua senha:
                          <input
                            value={passToDelete}
                            onChange={(e) => setPassToDelete(e.target.value)}
                            type="password"
                            name="password"
                            id="passValidationDelete"
                            placeholder="Ex. 123456"
                          />
                        </label>
                        <button type="submit">Deletar</button>
                      </form>
                      <p>
                        Se voce clicar em Deletar,
                        voce perdera todos os dados e o usuario sera excluido para sempre
                      </p>
                    </>
                  ) : (
                    <>
                      {' '}
                      <button onClick={handleDelete} type="button">YES</button>
                      <button onClick={closeAllQuestions} type="button">NO</button>
                      <p>
                        Se voce clicar em YES,
                        voce perdera todos os dados e o usuario sera excluido para sempre
                      </p>

                    </>
                  )}

                </div>
              ) : ('')}
            </div>
          ) : ('')}
        </div>
      </div>
      <h1>
        EM DESENVOLVIMENTO ...
      </h1>
    </SettingsStyles>
  );
}
