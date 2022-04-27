import React, { useEffect, useState } from 'react';
import { getStoredCart, deleteFromDb, clearTheCart } from '../../utilities/fakedb';
import data from '../../fakeData/products';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';
import './Order.css';

const Order = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);
    useEffect(() => {
        const savedData = getStoredCart();
        const saveDataKeys = Object.keys(savedData);
        console.log(saveDataKeys)
        const productData = saveDataKeys.map(key => {
            const product = data.find(pd => pd.key === key);
            product.quantity = savedData[key];
            return product;
        });
        setCart(productData);
    }, []);


    const handelRemoveProduct = (product) => {
        const otherProduct = cart.filter(pd => pd.key !== product.key);
        setCart(otherProduct);
        deleteFromDb(product.key);
    };


    const handelPlaceOrder = () => {
        setCart([]);
        setOrderPlace(true);
        clearTheCart();
    };

    let thankYou;
    if (orderPlace) {
        thankYou = <img src={happyImage} alt="" className="happyImage" />
    }

    return (
        <div className="shop container">
            <div className="product-details">
                {
                    cart.map(pd => <ReviewItem product={pd} key={pd.key}>
                        <button onClick={() => handelRemoveProduct(pd)} type="button" className='btn btn-warning'>Remove Product</button>
                    </ReviewItem>)
                }
                {
                    orderPlace && thankYou
                }
            </div>

            <div className="chat-side">
                {
                    <Cart cart={cart}>
                        {
                             <button onClick={handelPlaceOrder} type="button" className='btn btn-info'><Link className="product-link" to={`/review`}>Place Order</Link></button>
                        }
                    </Cart>
                }
            </div>

        </div>
    );
};

export default Order;