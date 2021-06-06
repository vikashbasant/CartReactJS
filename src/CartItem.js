import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Mobile phone',
            Qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
    }

    // testing () {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         // setState acts like a synchronus call
    //         this.setState({ Qty: this.state.Qty + 10 });

    //         this.setState({ Qty: this.state.Qty + 10 });

    //         this.setState({ Qty: this.state.Qty + 10 });

    //         console.log('state', this.state);
    //     });
    // }

    increaseQuantity = () => {
        // this.state.Qty += 1;
        
        // console.log('this', this.state);
        
        // calling setState function which basicaly render state: 
        // setState form 1:

        // this.setState({
        //     Qty: this.state.Qty + 1
        // }, () => {
        //     console.log('this.state', this.state);
        // });

        // setState form 2:
        // if prevState required use this
        
        this.setState((prevState) => {
            return {
                Qty: prevState.Qty + 1
            }
        }, () => {
            console.log('this.state', this.state);
        });

        
    }

    decreaseQunatity = () => {
        const { Qty } = this.state;

        if(Qty === 0){
            return;
        }
        this.setState((prevState) => {
            return {
                
                Qty : prevState.Qty - 1
            }
        });
    }
    render () {
        console.log('render');
        const { price, title, Qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
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
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                            onClick={this.decreaseQunatity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/3096/3096687.png" 
                        />
                    </div>
                </div>
            </div>
        );
    }
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