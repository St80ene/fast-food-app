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
          <p>We still dey arrange the services, abeg check later, thanks</p>
        </ImgWrapper>
      </Container>
    </>
  );
}

export default ServicePage;
