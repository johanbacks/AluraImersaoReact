import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/johanbacks">
          Johan Back
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
