import React, { useState, useEffect } from 'react';
import data from '../../fakeData/products';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => setProducts(data.slice(0, 20)), []);

    useEffect(() => {
        const savedData = getStoredCart();
        const saveDataKeys = Object.keys(savedData);
        const products = saveDataKeys.map(key => {
            const product = data.find(pd => pd.key === key);
            product.quantity = savedData[key];
            return product;
        });
        setCart(products);
        console.log(saveDataKeys);
    }, []);

    const handelAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const other = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...other, sameProduct];
        }
        else {
            product.quantity = count;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key, count);
    }


    return (
        <div className="shop container">
            <div className="product-details">
                {
                    products.map(pd => <Product product={pd} key={pd.key}>
                        <button onClick={() => handelAddProduct(pd)} type="button" className='btn btn-warning'>Buy now</button>
                    </Product>)
                }
            </div>

            <div className="chat-side">
                {
                    <Cart cart={cart}>
                        <button type="button" className='btn btn-info'><Link className="product-link" to={`/review`}>Review Order</Link></button>
                    </Cart>
                }
            </div>

        </div>
    );
};

export default Shop;