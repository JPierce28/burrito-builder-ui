import React from 'react';
import './Orders.css';

const Orders = props => {
  const orderEls = props.orders.map(order => {
    return (
      <div className="order" key={order.id}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li key={order.id +=1}>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });
  return (
    <section className='order-container' key={100}>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;