import React, { useState, useEffect } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {

  const [ingredients, setIngredients] = useState([]);

  /**
   * This hook handles Side Effects. It gets executed right after every
   * component update (re-render) if no second argument is passed, acting
   * like the componentDidUpdate().
   */
  useEffect(() => {
    fetch('https://react-hooks-cdf8b-default-rtdb.firebaseio.com/ingredients.json')
      .then(response => response.json())
      .then(responseData => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount
          });
        }
        setIngredients(loadedIngredients);
      })
    /**
     * Used like this (with [] as a second argument), it acts like the
     * componentDidMount(), which means that it runs only once (after the
     * first render).
     */
  }, []);

  const addIngredientHandler = (ingredient) => {
    fetch('https://react-hooks-cdf8b-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      return response.json();
    }).then(responseData => {
      setIngredients(prevIngredients => [
        ...prevIngredients,
        { id: responseData.name, ...ingredient }
      ]);
    });

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
