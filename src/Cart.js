import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    Qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 9999,
                    title: 'Mobile Phone',
                    Qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 50000,
                    title: 'Laptop',
                    Qty: 4,
                    img: '',
                    id: 3
                },
                {
                    price: 1999,
                    title: 'Head Phone',
                    Qty: 5,
                    img: '',
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
    render () {
        const { products } = this.state; 
        return (
            <div className="cart">
                {products.map((products) => {
                    return (
                        <CartItem 
                            products={products} 
                            key={products.id} 
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            onDecreaseQuantity = {this.handleDecreaseQuantity}
                            onDeleteProduct = {this.handleDeleteProduct}
                        />
                    )
                }) }
            </div>
        );
    }
}


export default Cart;