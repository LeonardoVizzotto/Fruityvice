import React, { useState } from 'react';
import { Container, Spacer, Basket, ItemCount } from './styles';
import BasketIcon from '../../assets/basket.svg';
import { Fruit } from '../../pages';
import BasketDetail from '../BasketDetail';

const Toolbar = (props: { fruits: Fruit[] }) => {
  const [showBasketDetail, setShowBasketDetail] = useState(false);

  const renderItemCount = () => {
    if (props.fruits.length) {
      return <ItemCount>{props.fruits.length}</ItemCount>;
    }
  };

  const renderBasketDetail = () => {
    if (showBasketDetail) {
      return <BasketDetail fruits={props.fruits} />;
    }
  };

  return (
    <Container>
      <h2>Fruit Salad</h2>
      <Spacer></Spacer>
      <Basket>
        <button
          onBlur={() => setShowBasketDetail(false)}
          onClick={() => setShowBasketDetail(!showBasketDetail)}
        >
          <BasketIcon />
          {renderItemCount()}
          {renderBasketDetail()}
        </button>
      </Basket>
    </Container>
  );
};

export default Toolbar;
