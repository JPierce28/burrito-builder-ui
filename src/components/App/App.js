import React, { Component } from 'react';
import './App.css';
import { getOrders } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    let allOrders =  getOrders()
      .then(data => this.setState({orders: data.orders}))
      .catch(err => console.error('Error fetching:', err))
    return allOrders 
  }

  postOrder = newOrder => {
    fetch('http://localhost:3001/api/v1/orders', {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {"Content-type": "application/json"}
    })
    this.componentDidMount()
  }

  

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm postOrder={this.postOrder}/>
        </header>
        {this.state.orders.length === 0 && <h2>There are no orders</h2>}
        {this.state.orders.length !== 0 && <Orders orders={this.state.orders} />}
      </main>
    );
  }
}


export default App;
