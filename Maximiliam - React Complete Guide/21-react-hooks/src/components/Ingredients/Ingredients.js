import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  /**
   * All the functions defined inside of the component funciont are created
   * again. So be careful and avoid creating an infinite loop.
   */

  const [ingredients, setIngredients] = useState([]);

  /**
   * This hook handles Side Effects. It gets executed right after every
   * component update (re-render) if no second argument is passed, acting
   * like the componentDidUpdate().
   */
  // useEffect(() => {
  //   fetch('https://react-hooks-cdf8b-default-rtdb.firebaseio.com/ingredients.json')
  //     .then(response => response.json())
  //     .then(responseData => {
  //       const loadedIngredients = [];
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount
  //         });
  //       }
  //       setIngredients(loadedIngredients);
  //     })
  /**
   * Used like this (with [] as a second argument), it acts like the
   * componentDidMount(), which means that it runs only once (after the
   * first render).
   */
  // }, []);

  /**
   * Here's an example of useEffect() with specific dependecies declared.
   */
  useEffect(() => {
    console.log('rendering ingredients...', ingredients);
  }, [ingredients]);

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

  /**
   * useCallback() hook receives a callback and and array as arguments. The hook
   * will return a memoized version of the callback, that only changes if the
   * dependencies changes.
   * It basically caches the callback function so it survives rerun cycles and
   * therefore the functiona is not recreated.
   */
  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
