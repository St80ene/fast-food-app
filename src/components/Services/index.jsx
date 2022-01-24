import React from 'react';
import { Container, ImgWrapper, ImgContainer } from './styles';
import { Construction } from '../../assets/img/index';
import '../../styles/general.scss';

function ServicePage() {
  return (
    <>
      <Container className="layout">
        <ImgWrapper>
          <ImgContainer src={Construction} />
        </ImgWrapper>
      </Container>
        <p>Page under construction</p>
    </>
  );
}

export default ServicePage;
