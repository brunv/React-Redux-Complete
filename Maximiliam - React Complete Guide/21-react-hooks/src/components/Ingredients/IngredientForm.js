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
  const [state, setState] = useState({ title: '', amount: '', });

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
              value={state.title}
              /**
               * Everytime you have to save a new state based on a previous state
               * you must use the first parameter of the 'setState' function, 
               * which is a snapshot of the previous state. Using the 'state'
               * directly can create some problems if you have lots of state to
               * manage.
               */
              onChange={event => {
                const newTitle = event.target.value;
                setState((prevState) => ({
                  title: newTitle,
                  amount: prevState.amount
                }));
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount"
              value={state.amount}
              onChange={event => {
                const newAmout = event.target.value;
                setState((prevState) => ({
                  title: prevState.title,
                  amount: newAmout
                }));
              }}
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
