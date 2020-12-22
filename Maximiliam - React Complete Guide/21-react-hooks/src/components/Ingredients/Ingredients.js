import React, { useMemo, useEffect, useCallback, useReducer } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';

/**
 * We tipically define our reducer outside of the component so that it isn't
 * recreated whenever the componenet re-renders, because the reducer function
 * is often decoupled from what is happening inside the component.
 * 
 * This hook accepts a reducer of (state, action) => newState and returns the
 * current state along with a dispatch method. It's commonly used when we have
 * a complex state to manipulate or the state depends on the previous state.
 * It is also used to optimize the performance when we have state updates that
 * are deeply nested. That's possible thanks to the dispatch function, intead
 * of passing down the callbacks.
 * 
 * When working with useReducer(), React will re-render the component whenever
 * your reducer returns the new state.
 */
const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.ingId);
    default:
      throw new Error('Shold not get there!');
  }
};

const httpReducer = (httpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null };
    case 'RESPONSE':
      return { ...httpState, loading: false };
    case 'ERROR':
      return { loading: false, error: action.errorMsg };
    case 'CLEAR':
      return { ...httpState, error: null }
    default:
      throw new Error('Should not be reached!');
  }
};

const Ingredients = () => {
  /****************************************************************************
   * All the functions (except the useReducers) defined inside of the component
   * funcions are created again when the component is rendered. So be careful 
   * and avoid creating an infinite loop.
   ****************************************************************************/

  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });
  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

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

  const addIngredientHandler = useCallback((ingredient) => {
    // setIsLoading(true);
    dispatchHttp({ type: 'SEND' });

    fetch('https://react-hooks-cdf8b-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      // setIsLoading(false);
      dispatchHttp({ type: 'RESPONSE' });
      return response.json();
    }).then(responseData => {
      // setIngredients(prevIngredients => [
      //   ...prevIngredients,
      //   { id: responseData.name, ...ingredient }
      // ]);
      dispatch({
        type: 'ADD',
        ingredient: { id: responseData.name, ...ingredient }
      });
    });
  }, []);

  /**
   * Everytime you have to save a new state based on a previous state
   * you must use the first parameter of the 'setState' function,
   * which is a snapshot of the previous state. Using the 'state'
   * directly can create some problems if you have lots of state to
   * manage.
  */
  const removeIngredientHandler = useCallback((ingredientId) => {
    // setIsLoading(true);
    dispatchHttp({ type: 'SEND' });

    fetch(`https://react-hooks-cdf8b-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, { method: 'DELETE', })
      .then(reponse => {
        // setIsLoading(false);
        dispatchHttp({ type: 'RESPONSE' });
        // setIngredients(prevIngredients => prevIngredients.filter(
        //   ing => ing.id !== ingredientId
        // ));
        dispatch({ type: 'DELETE', ingId: ingredientId });
      })
      .catch(error => {
        // setError(error.message);
        dispatchHttp({ type: 'ERROR', errorMsg: 'Something went wrong!' });
      });
  }, []);

  /**
   * useCallback() hook receives a callback and an array as arguments. The hook
   * will return a memoized version of the callback, that only changes if the
   * dependencies changes.
   * It basically caches the callback function so it survives re-run cycles and
   * therefore the functions is not recreated. 
   * The useCallack() is useful when we want to optimize child components that
   * depends on a reference of the callback so they don't re-render
   * unnecessarily, actiong like a 'componentShouldUpdate()'.
   */
  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setIngredients(filteredIngredients);
    dispatch({ type: 'SET', ingredients: filteredIngredients });
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
  const clearError = useCallback(() => {
    // setError(null);
    // setIsLoading(false);
    dispatchHttp({ type: 'CLEAR' });
  }, []);

  /**
   * The useMemo() hook receives a functions that returns the value that should
   * be memoized. This also receives a second argument which is a list of
   * dependencies, and tells react when it should re-run this functions to
   * create a new object that should be memoized.
   * It's an alternative to React.memo().
   */
  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [ingredients, removeIngredientHandler]);

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
      />
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
