import React, { Component } from 'react';

class OrderForm extends Component {
  constructor( props ) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: [],
      error: true
    };
  }

  handleIngredientChange = event => {
    event.preventDefault()
    console.log(event.target.name)
    let newIng = event.target.name
    this.setState({ingredients: [...this.state.ingredients, newIng]})
  }

  handleNameChange = e => {
    this.setState({name: e.target.value})
  }

  handleSubmit = e => {
    if(this.state.name === '' || this.state.ingredients.length === 0) {
      return this.setState({error: true})
    } else {
      this.setState({error: false})
      e.preventDefault();
      this.clearInputs();
      let newId = Date.now()
      let newName = this.state.name
      let ing = this.state.ingredients
      let postObj = {id: newId, name: newName, ingredients: ing}
      this.props.postOrder(postObj)
    }
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={event => this.handleIngredientChange(event)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form className='form'>
        <input
          className='input-form'
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p className='selected-ing'>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>
        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
