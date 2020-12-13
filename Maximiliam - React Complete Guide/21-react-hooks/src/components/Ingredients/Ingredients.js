import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';

const Ingredients = () => {
  /**
   * All the functions defined inside of the component funcions are created
   * again when the component is rendered. So be careful and avoid creating
   * an infinite loop.
   */

  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  /**
   * This hook handles Side Effects. It gets executed right after every
   * component update (re-render) if no second argument is passed, acting
   * like the componentDidUpdate().
   * 
   * Used with [] as a second argument, it acts like the
   * componentDidMount(), which means that it runs only once (after the
   * first render).
   * 
   * Here's an example of useEffect() with specific dependecies declared.
   */
  useEffect(() => {
    console.log('rendering ingredients...', ingredients);
  }, [ingredients]);

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);

    fetch('https://react-hooks-cdf8b-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      setIsLoading(false);
      return response.json();
    }).then(responseData => {
      setIngredients(prevIngredients => [
        ...prevIngredients,
        { id: responseData.name, ...ingredient }
      ]);
    });
  }

  /**
   * Everytime you have to save a new state based on a previous state
   * you must use the first parameter of the 'setState' function,
   * which is a snapshot of the previous state. Using the 'state'
   * directly can create some problems if you have lots of state to
   * manage.
  */
  const removeIngredientHandler = (ingredientId) => {
    setIsLoading(true);

    fetch(`https://react-hooks-cdf8b-default-rtdb.firebaseio.com/ingredients/${ingredientId}.jon`, { method: 'DELETE', })
      .then(reponse => {
        setIsLoading(false);
        setIngredients(prevIngredients => prevIngredients.filter(
          ing => ing.id !== ingredientId
        ));
      })
      .catch(error => {
        setError(error.message);
      });
  }

  /**
   * useCallback() hook receives a callback and and array as arguments. The hook
   * will return a memoized version of the callback, that only changes if the
   * dependencies changes.
   * It basically caches the callback function so it survives re-run cycles and
   * therefore the functions is not recreated.
   */
  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  /**
   * setState() hook batches the state updates. This means that in the function
   * bellow both updates run right after each other (synchronously). So
   * setError() doesn't cause a re-render cycle and then setIsLoading() doesn't
   * cause a re-render either. We only have one render cycle here which reflects
   * both state updates.
   * 
   * Keep in mind that the new state value is only available in the next
   * component render cycle. Both concepts (batching and new state availability)
   * bahave in the same way for both functional component with hooks as well as
   * class-based components with this.setState().
   */
  const clearError = () => {
    setError(null);
    setIsLoading(false);
  }

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
