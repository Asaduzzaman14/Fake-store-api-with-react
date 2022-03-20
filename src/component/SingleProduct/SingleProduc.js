import React from 'react';
import ReactModal from '../ReactModal/ReactModal';

const SingleProduc = (props) => {


    return (
        <div data-aos='fleip-left' className=' col-md-4 rounded'>
            <div className='card m-2 p-3'>
                <img className='w-50 mx-auto' src={props.product.image} alt="" />
                <h2>{props.product.title.slice(0, 10)}</h2>
                <div className='d-flex justify-content-around'>
                    <button onClick={props.add} className='bg-success btn btn-primary'> Add to cart</button>

                    <button className='bg-info btn btn-primary'>Detail</button>
                    <ReactModal product={props.product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default SingleProduc;