import React from 'react';
import Hero from '../Hero';
import bank from '../../Images/bank-icon.png';
import check from '../../Images/check.png';
import calendar from '../../Images/calendar.png';
import percentage from '../../Images/percentage.png';

function RepaymentSummaryCards() {
  return (
    <div className="d-flex">
      <Hero image={bank} heading="Total Outstanding" num="$380,700" />
      <Hero image={check} heading="Overdue Payments" num="1" />
      <Hero image={calendar} heading="Due This Month" num="2" />
      <Hero image={percentage} heading="Collection Rate" num="94.2%" />
    </div>
  );
}

export default RepaymentSummaryCards;
