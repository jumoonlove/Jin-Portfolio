import React from 'react'
import { FooterContainer, FooterText } from './Styles/Footer/Footer.style'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Jinsung Park. All Rights Reserved.</FooterText>
      <FooterText>
        <a href="https://github.com/jumoonlove" style={{ color: '#61dafb', textDecoration: 'none' }}>GitHub</a> |{' '}
        <a href="https://www.linkedin.com/in/jinsung-park-1106a0275/" style={{ color: '#61dafb', textDecoration: 'none' }}>LinkedIn</a>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;