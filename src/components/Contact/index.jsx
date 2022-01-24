import React from 'react';
import { Wrapper, ImgWrapper, ImgContainer } from './styles';
import { Construction } from '../../assets/img/index';
import '../../styles/general.scss';

function ContactPage() {
  return (
    <>
      <Wrapper className="layout">
        <ImgWrapper>
          <ImgContainer src={Construction} />
        </ImgWrapper>
        <p>Page under construction</p>
      </Wrapper>
    </>
  );
}

export default ContactPage;
