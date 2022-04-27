import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { name, seller, stock, price, img, key } = props.product;
    return (
        <div className="products">
            <div className="product">
                <div className="top">
                    <img src={img} alt="" />
                </div>
                <div className="bottom">
                    <h3 className='title'><Link className="title-link" to={`/products/${key}`}>{name}</Link></h3>
                    <p>by : <span>{seller}</span></p>
                    <p>Only <span>{stock}</span> left in stock - Order soon</p>
                    <h3 >Price : <span className='price'>{price}</span></h3>
                    {/* <button type="button" className='btn btn-warning'>Buy now</button> */}
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;