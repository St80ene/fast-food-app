import React from 'react';
import { Container, ImgWrapper, ImgContainer } from './styles';
import { Construction } from '../../assets/img/index';
import '../../styles/general.scss';

function ContactPage() {
  return (
    <>
      <Container className="layout">
        <ImgWrapper>
          <ImgContainer src={Construction} />
          <p>Omo, we never get phone for now, later things, Comrade</p>
        </ImgWrapper>
      </Container>
    </>
  );
}

export default ContactPage;
