import React, { useState } from 'react';
import SummaryCards from './RepaymentSummaryCards';
import LoanSearchBar from './LoanSearchBar';
import LoanTable from './LoanTable';

const RepaymentDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = {
    totalOutstanding: 380700,
    overduePayments: 1,
    dueThisMonth: 2,
    collectionRate: 94.2,
  };

  const allLoans = [
    {
      loanId: 'LN-2023-001',
      type: 'Personal Loan',
      customerName: 'John Anderson',
      customerId: 'CUS001',
      emi: 850,
      balance: 18500,
      dueDate: '2024-01-20',
      status: 'DUE',
    },
    // Add more loan objects here
  ];

  const filteredLoans = allLoans.filter(
    (loan) =>
      loan.loanId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loan.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mt-4">
      <h2>Repayment Dashboard</h2>
      <SummaryCards stats={stats} />
      <LoanSearchBar onSearch={handleSearch} />
      <LoanTable loans={filteredLoans} />
    </div>
  );
};

export default RepaymentDashboard;
