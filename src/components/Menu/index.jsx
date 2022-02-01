import React from 'react';
import { Card, CardContainer, Container, Heading, Overlay } from './styles';
import { Construction } from '../../assets/img/index';
import { MenuItems } from '../MenuItems';
import '../../styles/general.scss';

function MenuPage() {
  return (
    <>
      <Container className="layout">
        <Heading>Our Menu</Heading>
        <CardContainer>
          {MenuItems.map((item, index) => {
            return (
              <Card
                key={index}
                style={{
                  backgroundImage: 'url(' + Construction + ')',
                  backgroundSize: 'cover',
                }}
              >
                <Overlay>{item.category}</Overlay>
              </Card>
            );
          })}
        </CardContainer>
      </Container>
    </>
  );
}

export default MenuPage;
