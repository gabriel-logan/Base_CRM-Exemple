/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { Link } from 'react-router-dom';
import {
  AiOutlineClose, AiFillHome, AiOutlineCopyright, AiOutlineSetting,
} from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import { MdOutlineContactSupport } from 'react-icons/md';
import { BsFillChatLeftQuoteFill } from 'react-icons/bs';
import { SiWebmoney } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { NavMenuStyle } from './styled';
import * as actions from '../../store/modules/auth/actions';
// eslint-disable-next-line no-unused-vars

export default function NavMenu() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const id = useSelector((state) => state.auth.id);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(actions.loginFailure());
    toast.success('Você deslogou com sucesso!');
  };

  const closeMenu = (e) => {
    e.preventDefault();

    const navMenu = document.querySelector('#nav_menu');

    if (navMenu.style.transform === 'translateX(-100%)') {
      navMenu.style.transform = 'translateX(0)';
      navMenu.style.transition = '.5s';
    } else {
      navMenu.style.transform = 'translateX(-100%)';
    }
  };

  return (
    <NavMenuStyle id="nav_menu">
      <div id="titulo_menu">
        <div id="close_menu">
          <AiOutlineClose onClick={closeMenu} id="x" size={32} />
        </div>
      </div>
      <div id="menu_itens">
        <div onClick={closeMenu} id="div_home-itens">
          <Link className="links" to="/">
            <AiFillHome size={32} />
            <h3>Home</h3>
          </Link>
        </div>
        {isLoggedIn ? (
          <>
            <div onClick={closeMenu} id="div_profile-itens">
              <Link className="links" to={`/${id}`}>
                <CgProfile size={32} />
                <h3>Perfil</h3>
              </Link>
            </div>
            <div onClick={closeMenu} id="div_settings-itens">
              <Link className="links" to="/settings">
                <AiOutlineSetting size={32} />
                <h3>Configurações</h3>
              </Link>
            </div>
            <div onClick={closeMenu} id="div_negocios-itens">
              <Link className="links" to={`/buse/${id}`}>
                <SiWebmoney size={32} />
                <h3>Negocios</h3>
              </Link>
            </div>
          </>
        ) : (
          <div onClick={closeMenu} id="div_login-itens">
            <Link className="links" to="/login">
              <FiLogIn size={32} />
              <h3>Fazer login</h3>
            </Link>
          </div>
        )}
        <div onClick={closeMenu}>
          <Link className="links" to="/contato">
            <MdOutlineContactSupport size={32} />
            <h3>Suporte</h3>
          </Link>
        </div>
        {isLoggedIn ? (
          <div id="div_logout-itens">
            <Link onClick={handleLogout} className="links" to="/login">
              <BiLogOut size={32} />
              <h3>Fazer logout</h3>
            </Link>
          </div>
        ) : (
          ''
        )}

        <div id="copy_right-navVer">
          <div className="copy_rigth">
            <AiOutlineCopyright />
            <h3 title="Desenvolvido por Gabriel Logan">
              CopyRight
            </h3>
            <cite>
              Desenvolvido por Gabriel Logan
              <BsFillChatLeftQuoteFill />
            </cite>
          </div>
        </div>
      </div>
    </NavMenuStyle>
  );
}
