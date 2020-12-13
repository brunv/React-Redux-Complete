import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    setIngredients(prevIngredients => [
      ...prevIngredients,
      { id: Math.floor(Math.random() * 100).toString(), ...ingredient }
    ]);
  }

  const removeIngredientHandler = (ingredientId) => {
    // Not the best way (not using the prevState):
    // const updatedIngredients = ingredients.filter(ing => ing.id !== ingredientId);
    // setIngredients([...updatedIngredients]);
    setIngredients(prevIngredients => prevIngredients.filter(
      ing => ing.id !== ingredientId
    ));
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
