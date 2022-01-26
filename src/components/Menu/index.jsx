import React from 'react';
import { Container, ImgWrapper, ImgContainer } from './styles';
import { Construction } from '../../assets/img/index';
import '../../styles/general.scss';

function MenuPage() {
  return (
    <>
      <Container className="layout">
        <ImgWrapper>
          <ImgContainer src={Construction} />
          <p>Comrade, food still dey fire 🔥, abeg come back later</p>
        </ImgWrapper>
      </Container>
    </>
  );
}

export default MenuPage;
