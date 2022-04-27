import React from 'react';
import logo from '../../logo.svg';
import './Cart.css'


const Cart = (props) => {
    const cart = props.cart;
    const formatNumber = (price) => {
        return Number(price.toFixed(2));
    }
    const productPrice = formatNumber(cart.reduce((total, pd) => total + (pd.price) * pd.quantity, 0));

    let shipping = 0;
    if (productPrice > 35) {
        shipping = 0;
    }
    else if (productPrice > 15) {
        shipping = 4.99;
    }
    else if (productPrice > 0) {
        shipping = 12.99;
    }

    const tax = formatNumber(productPrice * .10);
    const total = productPrice + shipping + tax;
    const totalProductPrice = formatNumber(total);



    return (
        <div className='cart'>
            <img className='summary-logo' src={logo} alt="" />
            <h2 className='summary-title'><span>Order Summary</span></h2>
            <p className='summary'>Items Ordered : <span> {cart.length}</span></p>
            <p className='summary'>product Price : <span>{productPrice}</span></p>
            <p className='summary'>Shipping Cost : <span>{shipping}</span></p>
            <p className='summary'>Tax + VAT : <span>{tax}</span></p>
            <p className='summary'>Total Price : <span>{totalProductPrice}</span></p>
            {props.children}
        </div>
    );
};

export default Cart;