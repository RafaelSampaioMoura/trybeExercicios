import React from 'react';
import Order from './Order';

class Pedidos extends React.Component {
  render() {
    const pedidos = [
      {
        id: 102,
        user: 'cena@gmail.com',
        product: 'Razer Headphone',
        price: {
          value: 99.99,
          currency: 'dollars',
        },
      },
      {
        id: 77,
        user: 'cena@gmail.com',
        product: 'Monster 500mL',
        price: {
          value: 9.99,
          currency: 'dollars',
        },
      },
    ];
    return pedidos.map((pedido) => {
      return (
        <div>
          <Order order={pedido} />
        </div>
      );
    });
  }
}

export default Pedidos;
