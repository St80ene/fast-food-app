import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  padding: 80px 60px;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Link = styled.div`
  font-size: 18px;
  margin-bottom: 28px;
  text-decoration: none;
`;

const Title = styled.h3`
  margin-bottom: 40px;
`;

export { Container, Column, Row, Title, Link, Wrapper };