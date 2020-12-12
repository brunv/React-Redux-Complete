import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  /**
   * The state here can be anything: object, array, number, string, boolean...
   * But in the class-based components the state always was an object!
   */
  /**
   * This useState function always returns an array with two elements. The first
   * one is a snapshot of the current state and the second is a function to set
   * the new state. Use the array destructuring to create 'foo' and 'setFoo'.
   */
  /**
   * Split your state into multiple state. Only use arrays or objects if you
   * really have data that changes together.
   */
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title"
              value={title}
              /**
               * Everytime you have to save a new state based on a previous state
               * you must use the first parameter of the 'setState' function, 
               * which is a snapshot of the previous state. Using the 'state'
               * directly can create some problems if you have lots of state to
               * manage.
               */
              onChange={event => setTitle(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount"
              value={amount}
              onChange={event => setAmount(event.target.value)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
