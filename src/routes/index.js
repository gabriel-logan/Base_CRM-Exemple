import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import Contact from '../pages/contact';
import Profile from '../pages/profile';
import Settings from '../pages/settings';
import Negocios from '../pages/negocios';

import NotFound from '../pages/404';

import LoggedControll, { SettingsControll } from './controls';

import MyRoutes from './MyRoutes';

export default function ConfigRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Profile />} />
      <Route path="/buse/:id" element={<Negocios />} />
      <Route
        path="/login"
        element={(
          <LoggedControll>
            <Login />
          </LoggedControll>
)}
      />
      <Route
        path="/settings"
        element={(
          <SettingsControll>
            <Settings />
          </SettingsControll>
)}
      />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />

      <Route
        path="/contato"
        element={(
          <MyRoutes path="/contato">
            <Contact />
          </MyRoutes>
)}
      />
    </Routes>
  );
}

// Exemplo de rota fechada
/* <Route element={<MyRoutes />}>
<Route path="/fechada" element={<Fechada />} />
</Route> */
