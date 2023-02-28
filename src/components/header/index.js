import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FiAlignJustify } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { HeaderStyle } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userId = useSelector((state) => state.auth.id);

  const openMenu = (e) => {
    e.preventDefault();

    const navMenu = document.querySelector('#nav_menu');
    if (navMenu.style.transform !== 'translateX(0)') {
      navMenu.style.transform = 'translateX(0)';
      navMenu.style.transition = '.5s';
    }
  };
  return (
    <HeaderStyle>
      <div>
        <FiAlignJustify onClick={openMenu} id="menu" size={32} />
        {isLoggedIn ? (
          <>
            <FaCircle id="circleLog" className="cicleLogLogged" size={32} />
            <Link to={`/${userId}`}>
              <CgProfile id="homeIco" size={32} />
            </Link>
          </>
        ) : (
          <>
            <FaCircle id="circleLog" className="cicleLogNotLogged" size={32} />
            <Link to="/">
              <AiFillHome id="homeIco" size={32} />
            </Link>
          </>
        )}
      </div>
    </HeaderStyle>
  );
}
