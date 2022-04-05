import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <div>
          <p> {user} bought {product} for {price.value} {price.currency} </p><br/>
        </div>
      </div>
    );
  }
}

export default Order;