import React from 'react';
import Starting from './Starting';
import Four_heros from './Four_heros';
import Loan_card_group from './Loan_card_group';
function Loan_product_dashboard(){
    return (
        <>
            <Starting
            heading="Loan Product Management"
            description="Configure and manage loan products offered by the bank."/>

            <Four_heros/>
            <Loan_card_group/>
        </>
    )
}
export default Loan_product_dashboard;