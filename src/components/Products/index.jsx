import React from 'react';
import { Container, ImgWrapper, ImgContainer } from './styles';
import { Construction } from '../../assets/img/index';
import '../../styles/general.scss';

function ProductPage() {
  return (
    <>
      <Container className="layout">
        <ImgWrapper>
          <ImgContainer src={Construction} />
          <p>Products coming soon...One love ♥</p>
        </ImgWrapper>
      </Container>
    </>
  );
}

export default ProductPage;
