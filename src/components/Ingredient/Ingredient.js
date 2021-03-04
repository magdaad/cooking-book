import React from 'react';
import './Ingredient.scss'

const Ingredient = ({quantity, name, type}) => {
  return(
      <li>{quantity}{name}{type}</li>
  );
}

export default Ingredient;
