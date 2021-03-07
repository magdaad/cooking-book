import React from 'react';
import './IngredientList.scss'

const IngredientList = ({ingredients}) => {
  return(
      <>
          <h3>Ingredients:</h3>
          <p>{ingredients}</p>
      </>

  );
}

export default IngredientList;
