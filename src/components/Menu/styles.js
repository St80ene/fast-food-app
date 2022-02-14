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
  min-height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 850px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const Card = styled.div`
  margin: 1rem auto;
  border: 1px solid gray;
  border-radius: 4px;
  width: 96%;
  height: 450px;
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  & > img {
    height: auto;
    width: 100%;
  }

  @media screen and (min-width: 850px) {
    width: 23rem;
  }
`;

const CardBodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const CardBody = styled.div`
  width: 100%;
  margin-top: 55%;
  background-color: rgba(22 19 19 / 38%);
  color: white;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const FoodTitle = styled.h3`
  padding-top: 10px;
  font-size: 20px;
`;

const FoodDescription = styled.p`
  align-items: center;
`;

const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  height: 50px;
`;

const AddToCartButton = styled.button`
  padding: 7px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 17px;
  font-weight: bold;
  width: 115px;
  background-color: #fbb97d;
  color: #4e4545;
  cursor: pointer;

  &:hover {
    color: #fbb97d;
    background-color: #4e4545;
    border: 1px solid #fbb97d;
    transition: 0.3s ease-in-out;
  }
`;

const FoodPriceTag = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export {
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
};
