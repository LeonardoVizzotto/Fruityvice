import React from 'react';
import { Container } from './styles';
import { Fruit } from '../../pages';

const BasketDetail = (props: { fruits: Fruit[] }) => {
  const getFruitNameListItem = (name: string) => <li key={name}>{name}</li>;

  let totalCalories = 0;
  let totalCarbohydrates = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  const fruitNames: JSX.Element[] = [];

  props.fruits.forEach((f, i) => {
    fruitNames.push(getFruitNameListItem(`${i + 1}. ${f.name}`));
    totalCalories += f.nutritions.calories;
    totalCarbohydrates += f.nutritions.calories;
    totalProtein += f.nutritions.protein;
    totalFat += f.nutritions.fat;
    totalSugar += f.nutritions.sugar;
  });

  return props.fruits.length ? (
    <Container>
      {
        <>
          <span>Your fruit salad:</span>
          <ul>{fruitNames}</ul>
          <span>Nutrition info in your salad:</span>
          <ul>
            <li>
              <span>{totalCalories.toFixed(2)} calories</span>
            </li>
            <li>
              <span>{totalCarbohydrates.toFixed(2)} carbohydrates</span>
            </li>
            <li>
              <span>{totalProtein.toFixed(2)} protein</span>
            </li>
            <li>
              <span>{totalFat.toFixed(2)} fat</span>
            </li>
            <li>
              <span>{totalSugar.toFixed(2)} sugar</span>
            </li>
          </ul>
        </>
      }
    </Container>
  ) : (
    <Container>Please select your fruits</Container>
  );
};

export default BasketDetail;
