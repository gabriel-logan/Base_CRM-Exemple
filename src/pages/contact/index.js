import React, { useState } from 'react';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { ContatoStyles } from './style';

export default function Contato() {
  const [name, setName] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const [msg, setMsg] = useState('');

  function setValorContador() {
    if (!document.querySelector('#contador')) return;

    const contador = document.querySelector('#contador');

    if (msg.length > 0) {
      contador.style.color = 'red';
    } else {
      contador.style.color = 'black';
    }
  }

  setValorContador();

  // eslint-disable-next-line consistent-return
  const formSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line prefer-const
    let errors = false;

    try {
      // eslint-disable-next-line max-len
      if (name.length < 1 || sobrenome.length < 1 || email.length < 1 || msg.length < 1 || subject.length < 1) {
        errors = true;
        toast.warn('Nenhum campo pode ser vasio');
      }

      if (subject.length > 15) {
        errors = true;
        toast.warn('Assunto muito longo, digite algo menor');
      }

      if (!isEmail(email)) {
        errors = true;
        toast.error('Email invalido');
      }

      if (name.length > 14) {
        errors = true;
        toast.warn('Nome muito grande');
      }
      if (sobrenome.length > 14) {
        errors = true;
        toast.warn('Sobrenome muito grande');
      }
      if (email.length > 35) {
        errors = true;
        toast.warn('Email estranhamente muito grande, tente novamente');
      }
      if (msg.length > 200) {
        errors = true;
        toast.warn('Mensagem não pode ultrapassar 200 Caracteres');
      }

      const form = document.querySelector('form');

      if (!errors) {
        toast.success('Enviada com sucesso !');

        return form.submit();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <ContatoStyles>
      <div id="div_form">
        <h1>Contate nos</h1>
        <form onSubmit={formSubmit} action="/contato" method="get">
          <label htmlFor="name">
            Seu nome:
            <input
              value={name}
              onChange={(e) => { setName(e.target.value); }}
              type="text"
              id="name"
              name="name"
              placeholder="Ex. João"
              title="Digite seu nome"
            />
          </label>
          <label htmlFor="sobrenome">
            Seu sobrenome:
            <input
              value={sobrenome}
              onChange={(e) => { setSobrenome(e.target.value); }}
              type="text"
              id="sobrenome"
              name="sobrenome"
              placeholder="Ex. Santos Ribeiro"
              title="Digite seu sobrenome"
            />
          </label>
          <label htmlFor="email">
            Seu email:
            <input
              value={email}
              onChange={(e) => { setEmail(e.target.value); }}
              type="email"
              id="email"
              name="email"
              placeholder="Ex. joao42exemplo@gmail.com"
              title="Digite seu email"
            />
          </label>
          <label htmlFor="subject">
            Assunto:
            <input
              value={subject}
              onChange={(e) => { setSubject(e.target.value); }}
              type="text"
              id="subject"
              name="subject"
              placeholder="Ex. Parabenizar a equipe desevolvedora"
              title="Digite o assunto"
            />
          </label>
          <label htmlFor="msg">
            Digite sua mensagem:
            <textarea
              maxLength="200"
              value={msg}
              onChange={(e) => { setMsg(e.target.value); }}
              id="msg"
              name="msg"
              placeholder="Ex. Gostaria de parabenizar a todos que desenvolveram este site"
              title="Digite seu texto aqui"
            />
          </label>
          <div id="div_contador">
            <h4>
              <span id="contador">{msg.length === 200 ? ('Max') : (msg.length)}</span>
              Caracteres
            </h4>
          </div>
          <button title="Clique para enviar" type="submit">Enviar</button>
        </form>
      </div>
    </ContatoStyles>
  );
}
