/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import LeadsStyles from './styled';

import Loading from '../../../components/Loading';

import axios from '../../../services/axios';

export default function Leads() {
  const [isLoading, setIsLoading] = useState(false);

  const [empresa, setEmpresa] = useState('');
  const [valores, setValores] = useState('');
  const [cidade, setCidade] = useState('');
  const [captacao, setCaptacao] = useState('');
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');

  const userId = useSelector((state) => state.auth.id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = false;

    // eslint-disable-next-line max-len
    if (empresa.length < 0 || cidade.length < 0 || captacao.length < 0 || nome.length < 0 || contato.length < 0) {
      toast.info('Nenhum campo pode estar vasio');
      errors = true;
    }

    if (valores.length < 0) {
      toast.warn('Valores não podem ser negativos');
      errors = true;
    }

    // eslint-disable-next-line max-len
    if (empresa.length > 100 || cidade.length > 100 || captacao.length > 100 || nome.length > 100 || contato.length > 100) {
      toast.info('Nenhum campo pode ser maior que 100');
      errors = true;
    }

    if (valores.length > 100) {
      toast.warn('Valor não permitido');
      errors = true;
    }

    if (errors) return;
    setIsLoading(true);

    try {
      await axios.post('/lead', {
        empresa, valores, cidade, captacao, nome, contato, userId,
      });
      toast.success('Lead cadastrado com sucesso!');
      setIsLoading(false);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setIsLoading(false);

      toast.error('Erro desconhecido');
    }
  };

  return (
    <LeadsStyles>
      <Loading isLoading={isLoading} />

      <form method="post" onSubmit={handleSubmit}>
        <h1>Criar Lead</h1>
        <label htmlFor="companyName">
          Empresa:
          <input value={empresa} onChange={(e) => { setEmpresa(e.target.value); }} placeholder="Digite o nome da empresa" id="companyName" name="companyName" />
        </label>
        <label htmlFor="valueBusinesClient">
          Valores:
          <input value={valores} onChange={(e) => { setValores(e.target.value); }} placeholder="Digite o valor do negocio" id="valueBusinesClient" name="valueBusinesClient" />
        </label>
        <label htmlFor="cityClient">
          Cidade:
          <input value={cidade} onChange={(e) => { setCidade(e.target.value); }} placeholder="Digite o nome da cidade" id="cityClient" name="cityClient" />
        </label>
        <label htmlFor="captModeClient">
          Modo de captação:
          <input value={captacao} onChange={(e) => { setCaptacao(e.target.value); }} placeholder="Modo de captação" id="captModeClient" name="captModeClient" />
        </label>
        <label htmlFor="nameClient">
          Nome:
          <input value={nome} onChange={(e) => { setNome(e.target.value); }} placeholder="Digite o nome do representante" id="nameClient" name="nameClient" />
        </label>
        <label htmlFor="emailClient">
          Contato:
          <input value={contato} onChange={(e) => { setContato(e.target.value); }} type="email" placeholder="Digite o email de contato" id="emailClient" name="emailClient" />
        </label>
        <button type="submit">Cadastrar Lead</button>
      </form>
    </LeadsStyles>
  );
}
