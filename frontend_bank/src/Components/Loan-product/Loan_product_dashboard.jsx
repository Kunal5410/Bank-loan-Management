import React, { useEffect, useState } from 'react';
import Starting from './Starting';
import Four_heros from './Four_heros';
import Loan_card_group from './Loan_card_group';
import axios from 'axios';

function Loan_product_dashboard(){

     const[loans,setloans]=useState([]);
    
        useEffect(()=>{
            axios.get("http://localhost:8081/loans")
            .then(res =>{setloans(res.data); })
            .catch(error =>{
                console.error(error);
            } );
    
        },[]) ;   

    return (
        <>
            <Starting
            heading="Loan Product Management"
            description="Configure and manage loan products offered by the bank."/>

            <Four_heros loans={loans}/>
            <Loan_card_group loans={loans}/>
        </>
    )
}
export default Loan_product_dashboard;