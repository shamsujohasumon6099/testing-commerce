import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = (props) => {
    const { name, quantity, seller, price, img, key } = props.product;
    return (
        <div className="products">
            <div className="product">
                <div className="top">
                    <img src={img} alt="" />
                </div>
                <div className="bottom">
                    <h3 className='title'><Link className="title-link" to={`/products/${key}`}>{name}</Link></h3>
                    <p>by : <span>{seller}</span></p>
                    <p>Quantity : <span>{quantity}</span></p>
                    <h3 >Price: <span className='price'>{price}</span></h3>
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;