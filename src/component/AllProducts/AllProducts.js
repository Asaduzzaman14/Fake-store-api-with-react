import React, { useEffect, useState } from 'react';
import SingleProduc from '../SingleProduct/SingleProduc';

const AllProducts = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        <div>
            <h2>all Product </h2>
            <div className='row m-4 '>
                {
                    products.map(product => <SingleProduc add={props.add} product={product}></SingleProduc>)
                }
            </div>

        </div>
    );
};

export default AllProducts;