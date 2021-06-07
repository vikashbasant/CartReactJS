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
    render () {
        const { products } = this.state; 
        return (
            <div className="cart">
                {products.map((products) => {
                    return (
                        <CartItem 
                            products={products} 
                            key={products.id} 
                            

                        />
                    )
                }) }
            </div>
        );
    }
}


export default Cart;