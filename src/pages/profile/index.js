import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillCameraFill } from 'react-icons/bs';

// eslint-disable-next-line no-unused-vars
import { CgProfile } from 'react-icons/cg';
import { Navigate, useParams } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { ProfileStyles } from './styled';

import Loading from '../../components/Loading';

import * as actions from '../../store/modules/auth/actions';

import axios from '../../services/axios';

import history from '../../services/history';

export default function Profile() {
  const urlBase = 'https://api.3utilities.com/images/';
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [isLoading, setIsLoading] = useState(false);

  const userId = useSelector((state) => state.auth.id);

  const { id } = useParams();

  function verificaParametro() {
    if (Number(id) !== Number(userId)) {
      return Navigate({ to: '/' });
    }
    return true;
  }

  verificaParametro();

  let userName;
  if (isLoggedIn) {
    userName = useSelector((state) => state.auth.user);
  }

  const dispatch = useDispatch();
  const [fotoProfile, setFotoProfile] = useState('');
  const [fotoCapa, setFotoCapa] = useState('');

  useEffect(() => {
    const getDataProfile = async () => {
      try {
        const { data } = await axios.get(`users/${userId}`);

        const getFotoData = get(data.users, 'FotoProfiles[0].filename', '');

        setFotoProfile(getFotoData);
      } catch (err) {
        toast.error('Erro ao obter imagem');
        history.push('/');
      }
    };
    const getDataCapa = async () => {
      try {
        const { data } = await axios.get(`users/${userId}`);

        const getFotoData = get(data.fotoCapa, 'FotoCapas[0].filename', '');

        setFotoCapa(getFotoData);
      } catch (err) {
        toast.error('Erro ao obter imagem');
        history.push('/');
      }
    };
    getDataCapa();
    getDataProfile();
  }, [userId]);

  async function sendCapaPic(e) {
    const fotoInput = e.target.files[0];

    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('formFotoCapa', fotoInput);
    setIsLoading(true);
    try {
      await axios.post('/foto/capa', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setIsLoading(false);

      toast.success('Foto enviada com sucesso');

      window.location.reload();
    } catch (error) {
      setIsLoading(false);

      const { status } = get(error, 'response', '');

      toast.error('Erro ao enviar foto');

      if (status === 401) dispatch(actions.loginFailure());
    }
  }
  async function sendProfilePic(e) {
    const fotoInput = e.target.files[0];

    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('formFotoProfile', fotoInput);
    setIsLoading(true);

    try {
      await axios.post('/foto/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setIsLoading(false);

      toast.success('Foto enviada com sucesso');

      window.location.reload();
    } catch (error) {
      setIsLoading(false);

      const { status } = get(error, 'response', '');

      toast.error('Erro ao enviar foto');

      if (status === 401) dispatch(actions.loginFailure());
    }
  }

  return (
    <ProfileStyles>
      <Loading isLoading={isLoading} />
      <div id="div_foto-capa">
        <div id="foto_capa">
          {fotoCapa ? <img src={urlBase + fotoCapa} alt="FOTOCAPA" /> : <img src="./capa.jpg" alt="Foto de capa" />}
          <label htmlFor="capaPic">
            <BsFillCameraFill size={32} />
            <input onChange={sendCapaPic} type="file" id="capaPic" name="capaPic" accept="image/*" />
          </label>
        </div>
      </div>
      <div id="div_foto-perfil">
        <div>
          {fotoProfile ? <img src={urlBase + fotoProfile} alt="FOTO" /> : <img src="./perfil.jpg" alt="Foto de perfil" />}
          <label htmlFor="profilePic">
            <BsFillCameraFill size={32} />
            <input onChange={sendProfilePic} type="file" id="profilePic" name="profilePic" accept="image/*" />
          </label>
        </div>
      </div>
      <div>
        {userName ? (<h1>{userName}</h1>) : (<h1>Undifinidi</h1>)}
      </div>
      <h1 id="dev">EM DESENVOLVIMENTO...</h1>
    </ProfileStyles>
  );
}
