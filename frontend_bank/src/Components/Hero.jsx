import React from 'react';
import '../../src/App.css';

function Hero(props) {
    return (
        <div id='hero' className='mx-4 my-4 d-flex align-items-center'>
            <img src={props.image} alt="Bank Icon" style={{ width: '24px', margin: '15px' }} />
            <div >
                <p className='my-2'>{props.heading}</p>
                <h5 className='my-2'>{props.num}</h5>
            </div>
        </div>
    );
}

export default Hero;
