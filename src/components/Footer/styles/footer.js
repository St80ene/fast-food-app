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

const Link = styled.a`
  font-size: 14px;
  margin-bottom: 28px;
  text-decoration: none;
  color: black;

  &:hover {
    color: #fbb97e;
    transition: 0.3s ease-in-out;
  }
`;

const Title = styled.p`
  margin-bottom: 40px;
  font-weight: bold;
`;

const Note = styled.p`
  font-size: 14px;
  text-align: center;
  padding-top: 20px;
`;

export { Container, Column, Row, Title, Link, Wrapper, Note };
