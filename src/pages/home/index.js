import React from 'react';
import { useSelector } from 'react-redux';

import { HomeStyles } from './styled';

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let userName;
  if (isLoggedIn) {
    userName = useSelector((state) => state.auth.user);
  }

  return (
    <HomeStyles>
      {userName ? (
        <h1>
          Seja bem vindo usuario
          {' '}
          {userName}
        </h1>
      ) : (
        <>
          <h1>Bem vindo, aqui é a pagina inicial</h1>
          <p>Faça login para utilizar todas as nossas ferramentas</p>
        </>
      )}
      <h3>PAGINA TESTE</h3>
      <h2><a target="_blank" href="https://i.pinimg.com/736x/f6/37/3a/f6373a8a19ab5af63784e4d303d84581.jpg" rel="noreferrer">CLIQUE AQUI</a></h2>
    </HomeStyles>
  );
}
