import React from 'react';
import { Card, CardContainer, Container, Heading, Overlay } from './styles';
import { Construction } from '../../assets/img/index';
import '../../styles/general.scss';

function MenuPage() {
  return (
    <>
      <Container className="layout">
        <Heading>Our Menu</Heading>
        <CardContainer>
          <Card style={{ backgroundImage: 'url(' + Construction + ')', backgroundSize: 'cover' }}>
            <Overlay></Overlay>
            Card
          </Card>
          <Card>
            <Overlay></Overlay>
            Card
          </Card>
          <Card>
            <Overlay></Overlay>
            Card
          </Card>
          <Card>
            <Overlay></Overlay>
            Card
          </Card>
          <Card>
            <Overlay></Overlay>
            Card
          </Card>
          <Card>
            <Overlay></Overlay>
            Card
          </Card>
          <Card>
            <Overlay></Overlay>
            Card
          </Card>
          <Card>
            <Overlay></Overlay>
            Card
          </Card>
          <Card>
            <Overlay></Overlay>
            Card
          </Card>
          <Card>
            <Overlay></Overlay>
            Card
          </Card>
        </CardContainer>
      </Container>
    </>
  );
}

export default MenuPage;
