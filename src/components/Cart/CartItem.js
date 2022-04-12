import React from 'react';

function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div
      className='row my-2 mb-3 text-capitalize text-center'
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className='col-10 mx-auto col-lg-2'>
        <img
          src={img}
          style={{ width: '5rem', height: '5rem' }}
          alt='product'
          className='img-fluid'
        />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>product : </span>
        {title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>price : $ </span>
        {price}
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <span className='btn btn-black mx-1' onClick={() => decrement(id)}>
              -
            </span>
            <span className='btn btn-black mx-1'>{count}</span>
            <span className='btn btn-black mx-1' onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/*  */}

      <div className='col-10 mx-auto col-lg-2 '>
        <div className='cart-icon'>
          <button type='button' class='btn btn-outline-warning '>
            <i className='fas fa-trash' onClick={() => removeItem(id)}></i>
          </button>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong>item total : $ {total} </strong>
      </div>
    </div>
  );
}

export default CartItem;
