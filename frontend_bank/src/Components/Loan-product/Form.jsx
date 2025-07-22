import React from 'react';
import add from '../../Images/add.png';

function Form() {
    return (
        <button
            className="btn mt-4 p-3 d-flex align-items-center"
            style={{
                backgroundColor: '#d0e7ff', // Light blue background
                color: '#007bff',           // Bootstrap primary blue text
                border: '1px solid #007bff',
                borderRadius: '8px', fontWeight: 'bold'
            }} >
            <img src={add} alt="Add" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
            Add Product
        </button>
    );
}

export default Form;
