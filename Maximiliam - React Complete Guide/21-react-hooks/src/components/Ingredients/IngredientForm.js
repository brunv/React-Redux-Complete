import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
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
    props.onAddIngredient({
      title: title,
      amount: amount
    });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title"
              value={title}
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
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
