import React from 'react';

function Starting(props){
    return(
        <div>
            <h2 className='ms-4 mt-4' >{props.heading}</h2>
            <p className='ms-4 mt-3' >{props.description}</p>
        </div>
    )
   
}
export default Starting;