import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Title({ name, title }) {
  return (
    <div className='row'>
      <div className='col-10 mx-auto my-2 text-center text-title'>
        <h1
          className='text-capitalize font-weight-bold'
          style={{ margin: '20px' }}
        >
          {name} <strong className='text-blue'>{title}</strong>
        </h1>
      </div>
    </div>
  );
}
