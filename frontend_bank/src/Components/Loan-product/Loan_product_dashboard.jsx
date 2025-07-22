import React, { useEffect, useState } from 'react';
import Starting from './Starting';
import Four_heros from './Four_heros';
import Loan_card_group from './Loan_card_group';
import axios from 'axios';
import Form from './Form';

function Loan_product_dashboard() {

    const [loans, setloans] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/loans")
            .then(res => { setloans(res.data); })
            .catch(error => {
                console.error(error);
            });

    }, []);

    return (
        <>
            <div className="container mt-3">
                <div className="row align-items-start justified-center">
                    <div className="col-md-9">
                        <Starting
                            heading="Loan Product Management"
                            description="Configure and manage loan products offered by the bank."
                        />
                    </div>
                    <div className="col-md-3 text-end">
                        <Form />
                    </div>
                </div>
            </div>




            <Four_heros loans={loans} />
            <Loan_card_group loans={loans} />
        </>
    )
}
export default Loan_product_dashboard;