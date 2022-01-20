import React from 'react';
import { Fruit } from '../../pages';
import Button from '../Button';
import { Container, ImagePlaceHolder, Spacer } from './styles';

type CardProps = {
  fruit: Fruit;
  toggleCard: (id: number) => void;
};

const Card = (props: CardProps) => {
  const { fruit, toggleCard } = props;

  return (
    <Container>
      <ImagePlaceHolder aria-hidden="true" />
      <Spacer aria-hidden="true" />
      <span>{fruit.name}</span>
      <span>{fruit.family}</span>
      <Spacer aria-hidden="true" />
      <div>
        {fruit.nutritions.calories} calories <br />{' '}
        {fruit.nutritions.carbohydrates} carbohydrates <br />
        {fruit.nutritions.protein} protein <br />
        {fruit.nutritions.fat} fat <br />
        {fruit.nutritions.sugar} sugar
      </div>
      <Spacer aria-hidden="true" />
      <Button filled={fruit.selected} onClick={() => toggleCard(fruit.id)}>
        {fruit.selected ? 'ADDED' : 'ADD ME!'}
      </Button>
    </Container>
  );
};

export default Card;
