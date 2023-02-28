import React from 'react';
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineCopyright } from 'react-icons/ai';
import { FaGooglePlay, FaDiscord } from 'react-icons/fa';
import { FooterStyles } from './styled';

export default function Footer() {
  return (
    <FooterStyles>
      <div id="div_icons">
        <AiOutlineTwitter size={32} />
        <FaDiscord size={32} />
        <FaGooglePlay size={32} />
        <AiFillLinkedin size={32} />
      </div>
      <div id="div_quote">
        <cite>
          <AiOutlineCopyright />
          2022 Gabriel Logan
        </cite>
      </div>
    </FooterStyles>
  );
}
