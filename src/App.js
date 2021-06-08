import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                Qty: 1,
                img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
                id: 1
            },
            {
                price: 9999,
                title: 'Mobile Phone',
                Qty: 10,
                img: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                id: 2
            },
            {
                price: 50000,
                title: 'Laptop',
                Qty: 4,
                img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                id: 3
            },
            {
                price: 1999,
                title: 'Head Phone',
                Qty: 5,
                img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                id: 4
            }
        ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
}

handleIncreaseQuantity = (product) => {
    console.log('Hey please inc the Qty of ', product);
    const { products} = this.state;
    const index = products.indexOf(product);

    products[index].Qty += 1;

    this.setState({
        products
    })
}

handleDecreaseQuantity = (product) => {
    console.log('Hey please dec the Qty of ', product);
    const { products} = this.state;
    const index = products.indexOf(product);

    if(products[index].Qty == 0){
        return;
    }
    products[index].Qty -= 1;

    this.setState({
        products
    })
}
handleDeleteProduct = (id) => {
    const { products } = this.state;
    // this will return us another array []
    // this array will contains products
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
}

getCartCount = () => {
  const { products } = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.Qty;
  })

  return count;
}

getCartTotal = () => {
  const { products } = this.state;
  let cartTotal = 0;
  products.map((product) => {
    cartTotal = cartTotal + product.Qty * product.price
  })

  return cartTotal;
}
  render () {
    const { products } = this.state;
    return (
      <div className="App">
          <Navbar count={this.getCartCount()}/>
          <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
          />
          <div style={ { padding: 10, fontSize: 20} }>
            TOTAL: {this.getCartTotal()}
          </div>
      </div>
    );
  }
  
}

export default App;
