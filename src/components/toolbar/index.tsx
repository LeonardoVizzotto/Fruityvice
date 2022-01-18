import React from 'react';
import { Container, Spacer, Basket } from './styles';
import BasketIcon from '../../assets/basket.svg';

const Toolbar = () => {
  return (
    <Container>
      <h3>Fruit Salad</h3>
      <Spacer></Spacer>
      <Basket>
        <BasketIcon></BasketIcon>
      </Basket>
    </Container>
  );
};

export default Toolbar;
