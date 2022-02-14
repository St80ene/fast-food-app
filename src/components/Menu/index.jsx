import React from 'react';
import {
  Container,
  Heading,
  CardContainer,
  Card,
  CardBody,
  CardBodyWrapper,
  FoodTitle,
  FoodDescription,
  PriceWrapper,
  AddToCartButton,
  FoodPriceTag,
} from './styles';
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
                img={item.image}
              >
                <CardBodyWrapper>
                  <CardBody>
                    <FoodTitle>{item.title}</FoodTitle>
                    <FoodDescription>{item.description}</FoodDescription>
                    <PriceWrapper>
                      <FoodPriceTag>₦{item.price}</FoodPriceTag>
                      <AddToCartButton>Add to Cart</AddToCartButton>
                    </PriceWrapper>
                  </CardBody>
                </CardBodyWrapper>
              </Card>
            );
          })}
        </CardContainer>
      </Container>
    </>
  );
}

export default MenuPage;
