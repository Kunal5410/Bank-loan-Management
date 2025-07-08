import React, { useState } from 'react';
import SummaryCards from './RepaymentSummaryCards';
import LoanSearchBar from './LoanSearchBar';
import LoanTable from './LoanTable';
import RepaymentFormModal from './RepaymentFormModal';
import RepaymentFilterBar from './RepaymentFilterBar';
import RepaymentSummaryCards from './RepaymentSummaryCards';

const RepaymentDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedLoanId, setSelectedLoanId] = useState(null);

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
    // Add more loans here
  ];

  const handleSearch = (query) => setSearchQuery(query);
  const handleFilterChange = (filter) => setActiveFilter(filter);

  const handleMakeRepayment = (loanId) => {
    setSelectedLoanId(loanId);
    setShowModal(true);
  };

  const handleModalClose = () => setShowModal(false);

  const handleRepaymentSubmit = (data) => {
    console.log('Repayment submitted:', data);
    // TODO: Send to backend via Axios
  };

  const filteredLoans = allLoans.filter((loan) => {
    const matchesSearch =
      loan.loanId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loan.customerName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === 'All' ||
      (activeFilter === 'Overdue' && loan.status === 'DUE') ||
      (activeFilter === 'Paid' && loan.status === 'PAID');

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mt-4">
      <SummaryCards stats={stats} />
      <LoanSearchBar onSearch={handleSearch} />
      <RepaymentFilterBar activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      <LoanTable loans={filteredLoans} onMakeRepayment={handleMakeRepayment} />
      <RepaymentFormModal
        show={showModal}
        handleClose={handleModalClose}
        loanId={selectedLoanId}
        onSubmit={handleRepaymentSubmit}
      />
    </div>
  );
};

export default RepaymentDashboard;
