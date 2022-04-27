import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../fakeData/products';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
    const { productKey } = useParams();
    const pd = data.find(pd => pd.key === productKey);
    return (
        <div className="container">
            <Product product={pd}>
                <button type="button" className='btn btn-warning'><Link className="product-link" to={`/shop`}>Back to shop</Link></button>
            </Product>
        </div>
    );
};

export default ProductDetails;