import React from 'react';
import Hero from '../Hero';
import bank from '../../Images/bank-icon.png';
import check from '../../Images/check.png';
import dollar from '../../Images/dollar.png';
import percentage from '../../Images/percentage.png';


function Four_heros() {
    return (
        <div className='d-flex'>
            <Hero image={bank} heading='Total Product' num='4'/>
            <Hero image={check} heading='Active Product' num='3' />
            <Hero image={dollar} heading='Total Disbursed' num='$21000' />
            <Hero image={percentage} heading='Avg Interest Rate' num='11.4%' />
        </div>
    )

}
export default Four_heros;