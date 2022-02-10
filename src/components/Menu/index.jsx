import React from 'react';
import { Card, CardBody, CardContainer, Container, Heading } from './styles';
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
                style={
                  {
                    // backgroundImage: 'url(' + item.image + ')',
                    // backgroundSize: 'cover',
                  }
                }
              >
                <CardBody>Card body</CardBody>
              </Card>
            );
          })}
        </CardContainer>
      </Container>
    </>
  );
}

export default MenuPage;
