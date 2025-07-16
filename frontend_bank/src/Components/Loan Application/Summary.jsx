import React from 'react';
import Hero from '../Hero';
import application from '../../Images/docs.png';
import check from '../../Images/check.png';
import dollar from '../../Images/dollar.png';
import pending from '../../Images/pending.png';

function Summary()  {
    return (
        <div className='d-flex'>
            <Hero image={application} heading='Total Applications' num='4'/>
            <Hero image={pending} heading='Pending Review' num='2' />
            <Hero image={check} heading='Approved' num='2' />
            <Hero image={dollar} heading='Total Amount' num='$42500' />
        </div>
    )

}

export default Summary;