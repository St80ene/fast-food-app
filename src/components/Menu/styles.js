import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  margin-top: 1.2rem;
  text-align: center;
  color: #0000008f;

  @media screen and (min-width: 850px) {
    font-size: 17px;
    margin-top: 2.2rem;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 850px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const Card = styled.div`
  & > img {
    height: auto;
    width: 100%;
  }
  margin: 1rem auto;
  border: 1px solid gray;
  border-radius: 4px;
  width: 96%;
  min-height: 300px;
  position: relative;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 850px) {
    width: 23rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
`;

export { Container, Heading, CardContainer, Card, Overlay };
