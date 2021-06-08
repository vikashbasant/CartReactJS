import React from 'react';

const CartItem = (props) =>  {
    
        
        const { price, title, Qty } = props.products;
        const {
            products, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct } = props; 
        return (
            <div className="cart-item">
                
                <div className="left-block">
                    <img style={styles.image} src={products.img} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25} }>{title}</div>
                    <div style={ { color: '#777'} }>Rs {price}</div>
                    <div style={ { color: '#777'} }>Qty {Qty}</div>

                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/3303/3303893.png"
                            onClick={() => onIncreaseQuantity(products)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                            onClick={() => onDecreaseQuantity(products)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/3096/3096687.png" 
                            onClick={() => onDeleteProduct(products.id)}
                        />
                    </div>
                </div>
            </div>
        );
    
}

const styles = {
    image: {
        height: 120,
        width: 120,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;