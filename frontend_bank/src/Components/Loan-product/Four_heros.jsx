import React from 'react';
import Hero from '../Hero';
import bank from '../../Images/bank-icon.png';
import check from '../../Images/check.png';
import dollar from '../../Images/dollar.png';
import percentage from '../../Images/percentage.png';


function Four_heros(props) {

    const {loans}=props;

    const len=loans.length;

    const active=loans.filter(loan =>{ return loan.status==="Active"}).length;

    const totalInterest = loans.reduce((sum, loan) => sum + loan.interestRate,0);
    const avg =(totalInterest/len).toFixed(2) ;

    const totalAmount =loans.reduce((sum,loan)=>sum+loan.minAmount,0);


    return (
        <div className='d-flex'>
            <Hero image={bank} heading='Total Product' num={len}/>
            <Hero image={check} heading='Active Product' num={active} />
            <Hero image={dollar} heading='Total Disbursed' num={ `$${totalAmount}`} />
            <Hero image={percentage} heading='Avg Interest Rate' num={avg} />
        </div>
    )

}
export default Four_heros;