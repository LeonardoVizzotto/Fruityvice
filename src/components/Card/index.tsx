import React from 'react';
import { Fruit } from '../../pages';
import Button from '../Button';
import { Container, ImagePlaceHolder, Details } from './styles';

const Card = (props: Fruit) => {
  return (
    <Container>
      <ImagePlaceHolder />
      <span>{props.name}</span>
      <span>{props.family}</span>
      <Details>
        {props.nutritions.calories} calories <br />{' '}
        {props.nutritions.carbohydrates} carbohydrates <br />
        {props.nutritions.protein} protein <br />
        {props.nutritions.fat} fat <br />
        {props.nutritions.sugar} sugar
      </Details>
      <Button>ADD ME!</Button>
    </Container>
  );
};

export default Card;
