import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
  text-align: center;
`;

const ImgContainer = styled.img`
  width: 18rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export { Container, ImgWrapper, ImgContainer };
