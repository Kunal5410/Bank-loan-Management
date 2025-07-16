import Loan_card from './Loan_card';
import React from 'react';


function Loan_card_group(props) {
    const { loans } = props;
    


    // const[loans,setloans]=useState([]);

    // useEffect(()=>{
    //     axios.get("http://localhost:8081/loans")
    //     .then(res =>{setloans(res.data); })
    //     .catch(error =>{
    //         console.error(error);
    //     } );

    // },[]) ;   

    return (
        <div className='d-flex flex-wrap gap-3'>
            {loans.map((loan,index)=>(
                
                <Loan_card
                key={index}
                Loan_name={`${loan.productName} Loan`}
                bg={loan.status=== "Active" ? "success" : "danger"}
                bg_status={loan.status}
                rate={`${loan.interestRate}%`}
                range={`$${loan.minAmount} - $${loan.maxAmount}`}
                month={`${loan.tenure} months`}
                number={loan.application}
                
                />
            ))}

            {/* { This code is for static output
            
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
            /> } */}

        </div>
    )
}
export default Loan_card_group;