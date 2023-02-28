import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import {
  AiOutlinePlus, AiFillRightCircle, AiFillLeftCircle, AiFillWarning,
} from 'react-icons/ai';

import { get } from 'lodash';
import axios from '../../services/axios';

import NegociosStyles from './styled';

import Leads from '../includes/leads';

export default function Negocios() {
  const [isOpenLeads, setIsOpenLeads] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const userId = useSelector((state) => state.auth.id);

  const { id } = useParams();

  function verificaParametro() {
    if (Number(id) !== Number(userId)) {
      return Navigate({ to: '/' });
    }
    return true;
  }

  const criaNovoLead = () => {
    setIsOpenLeads(!isOpenLeads);

    const leadsForm = document.querySelector('#leads_form');

    if (isOpenLeads) {
      leadsForm.style.transform = 'translateY(-200%)';
      leadsForm.style.opacity = '0';
    } else {
      leadsForm.style.transform = 'translateY(25%)';
      leadsForm.style.opacity = '1';
    }
  };

  verificaParametro();

  const [leadsOculto, setLeadsOculto] = useState(false);

  const openOcultoLeads = (e) => {
    setLeadsOculto(!leadsOculto);

    const el = e.target;
    let divOculta;
    try {
      divOculta = el.nextSibling.nextSibling.nextSibling;
    } catch (error) {
      return;
    }

    if (leadsOculto) {
      divOculta.style.height = '0';
    } else {
      divOculta.style.height = '210px';
    }
  };

  const [leads, setLeads] = useState();

  useEffect(() => {
    const meusLeads = [];

    async function getMsgs() {
      const { data } = await axios.get(`/users/${userId}`);

      for (let index = 0; index < data.lead.Leads.length; index += 1) {
        const empresa = get(data.lead, `Leads[${index}].empresa`, '');
        const valores = get(data.lead, `Leads[${index}].valores`, '');
        const cidade = get(data.lead, `Leads[${index}].cidade`, '');
        const captacao = get(data.lead, `Leads[${index}].captacao`, '');
        const nome = get(data.lead, `Leads[${index}].nome`, '');
        const email = get(data.lead, `Leads[${index}].email`, '');

        const listaDeValores = [empresa, valores, cidade, captacao, nome, email];

        meusLeads.push(listaDeValores);

        setLeads(meusLeads);
      }
    }

    getMsgs();
  }, []);

  return (
    <NegociosStyles>
      {isLoggedIn ? (
        <div>
          <div id="leads_form">
            <Leads />
          </div>
          <div>
            <button id="abreLeads" type="button" onClick={criaNovoLead}>Criar Lead</button>
          </div>
          <div className="separa_infos">
            <div id="div_leads">
              <h1>LeadIn</h1>
              <div>
                {leads ? (
                  leads.map((valor) => (
                    <div className="leads" key={valor}>
                      <AiOutlinePlus id="openOcultoLead" size={32} cursor="pointer" onClick={openOcultoLeads} />
                      <h3>
                        Empresa:
                        {' '}
                        {valor[0]}
                      </h3>
                      <h3>
                        Valores:
                        {' '}
                        {valor[1]}
                      </h3>
                      <div className="oculto_leads">
                        <h3>
                          Cidade:
                          {' '}
                          {valor[2]}
                        </h3>
                        <h3>
                          Captação:
                          {' '}
                          {valor[3]}
                        </h3>
                        <h3>
                          Nome:
                          {' '}
                          {valor[4]}
                        </h3>
                        <h3>
                          Email:
                          {' '}
                          {valor[5]}
                        </h3>
                        <AiFillLeftCircle color="red" size="32" cursor="pointer" />
                        <AiFillRightCircle color="green" size={32} cursor="pointer" />
                        <AiFillRightCircle color="gray" size={32} cursor="pointer" />
                        <AiFillWarning color="yellow" size={32} cursor="pointer" />
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>
                    Nenhum lead cadastrado
                  </h1>
                )}
              </div>
            </div>
            <div className="blocos">
              <h1>Contato Feito</h1>

              <div className="leads">
                <AiOutlinePlus
                  id="openOcultoLead"
                  size={32}
                  cursor="pointer"
                  onClick={openOcultoLeads}
                />
                <h3>Empresa: Exemplo</h3>
                <h3>Valores: 3000,00 R$</h3>
                <div className="oculto_leads">
                  <h3>Cidade: São Paulo</h3>
                  <h3>Captação: GoogleAds</h3>
                  <h3>Nome: Exemplo</h3>
                  <h3>Email: Exemplo@exemplo.com</h3>
                  <AiFillLeftCircle color="red" size="32" cursor="pointer" />
                  <AiFillRightCircle color="green" size={32} cursor="pointer" />
                  <AiFillRightCircle color="gray" size={32} cursor="pointer" />
                  <AiFillWarning color="yellow" size={32} cursor="pointer" />
                </div>
              </div>
            </div>
            <div className="blocos">
              <h1>Precisa Definir</h1>
              <div className="leads">
                <AiOutlinePlus
                  id="openOcultoLead"
                  size={32}
                  cursor="pointer"
                  onClick={openOcultoLeads}
                />
                <h3>Empresa: Exemplo</h3>
                <h3>Valores: 3000,00 R$</h3>
                <div className="oculto_leads">
                  <h3>Cidade: São Paulo</h3>
                  <h3>Captação: GoogleAds</h3>
                  <h3>Nome: Exemplo</h3>
                  <h3>Email: Exemplo@exemplo.com</h3>
                  <AiFillLeftCircle color="red" size="32" cursor="pointer" />
                  <AiFillRightCircle color="green" size={32} cursor="pointer" />
                  <AiFillRightCircle color="gray" size={32} cursor="pointer" />
                  <AiFillWarning color="yellow" size={32} cursor="pointer" />
                </div>
              </div>
              <div className="leads">
                <AiOutlinePlus
                  id="openOcultoLead"
                  size={32}
                  cursor="pointer"
                  onClick={openOcultoLeads}
                />
                <h3>Empresa: Exemplo</h3>
                <h3>Valores: 3000,00 R$</h3>
                <div className="oculto_leads">
                  <h3>Cidade: São Paulo</h3>
                  <h3>Captação: GoogleAds</h3>
                  <h3>Nome: Exemplo</h3>
                  <h3>Email: Exemplo@exemplo.com</h3>
                  <AiFillLeftCircle color="red" size="32" cursor="pointer" />
                  <AiFillRightCircle color="green" size={32} cursor="pointer" />
                  <AiFillRightCircle color="gray" size={32} cursor="pointer" />
                  <AiFillWarning color="yellow" size={32} cursor="pointer" />
                </div>
              </div>
            </div>
            <div className="blocos">
              <h1>Proposta Feita</h1>
              <div className="leads">
                <AiOutlinePlus
                  id="openOcultoLead"
                  size={32}
                  cursor="pointer"
                  onClick={openOcultoLeads}
                />
                <h3>Empresa: Exemplo</h3>
                <h3>Valores: 3000,00 R$</h3>
                <div className="oculto_leads">
                  <h3>Cidade: São Paulo</h3>
                  <h3>Captação: GoogleAds</h3>
                  <h3>Nome: Exemplo</h3>
                  <h3>Email: Exemplo@exemplo.com</h3>
                  <AiFillLeftCircle color="red" size="32" cursor="pointer" />
                  <AiFillRightCircle color="green" size={32} cursor="pointer" />
                  <AiFillRightCircle color="gray" size={32} cursor="pointer" />
                  <AiFillWarning color="yellow" size={32} cursor="pointer" />
                </div>
              </div>
            </div>
            <div className="blocos">
              <h1>Iniciou negociacao</h1>
              <div className="leads">
                <AiOutlinePlus
                  id="openOcultoLead"
                  size={32}
                  cursor="pointer"
                  onClick={openOcultoLeads}
                />
                <h3>Empresa: Exemplo</h3>
                <h3>Valores: 3000,00 R$</h3>
                <div className="oculto_leads">
                  <h3>Cidade: São Paulo</h3>
                  <h3>Captação: GoogleAds</h3>
                  <h3>Nome: Exemplo</h3>
                  <h3>Email: Exemplo@exemplo.com</h3>
                  <AiFillLeftCircle color="red" size="32" cursor="pointer" />
                  <AiFillRightCircle color="green" size={32} cursor="pointer" />
                  <AiFillRightCircle color="gray" size={32} cursor="pointer" />
                  <AiFillWarning color="yellow" size={32} cursor="pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'Erro desconhecido'
      )}
    </NegociosStyles>
  );
}

/**
						 * <div className="leads">
              <AiOutlinePlus id="openOcultoLead"
							size={32} cursor="pointer" onClick={openOcultoLeads} />
              <h3>Empresa: Exemplo</h3>
              <h3>Valores: 3000,00 R$</h3>
              <div className="oculto_leads">
                <h3>Cidade: São Paulo</h3>
                <h3>Captação: GoogleAds</h3>
                <h3>Nome: Exemplo</h3>
                <h3>Email: Exemplo@exemplo.com</h3>
                <AiFillLeftCircle color="red" size="32" cursor="pointer" />
                <AiFillRightCircle color="green" size={32} cursor="pointer" />
                <AiFillRightCircle color="gray" size={32} cursor="pointer" />
                <AiFillWarning color="yellow" size={32} cursor="pointer" />
              </div>
            </div>
						 */
