import React from 'react';
import Loan_card from './Loan_card';

function Loan_card_group() {
    return (
        <div className='d-flex flex-wrap gap-3'>
            <Loan_card
                Loan_name={"Personal Loan"}
                bg={"success"}
                bg_status={"Active"}
                rate={"12%"}
                range={"$5,000 - $100,000"}
                month={"60 months"}
                number={"145"}
            />

            <Loan_card
                Loan_name={"Car Loan"}
                bg={"success"}
                bg_status={"Active"}
                rate={"15%"}
                range={"$5,000 - $10,000"}
                month={"40 months"}
                number={"45"}
            />

            <Loan_card
                Loan_name={"Home Loan"}
                bg={"success"}
                bg_status={"Active"}
                rate={"8%"}
                range={"$1,000 - $10,000"}
                month={"80 months"}
                number={"390"}
            />

            <Loan_card
                Loan_name={"Education Loan"}
                bg={"danger"}
                bg_status={"Closed"}
                rate={"11%"}
                range={"$5,00 - $300,0"}
                month={"60 months"}
                number={"30"}
            />

        </div>
    )
}
export default Loan_card_group;