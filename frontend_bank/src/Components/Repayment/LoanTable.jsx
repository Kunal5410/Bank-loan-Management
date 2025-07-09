import React from 'react';

const LoanTable = ({ loans, onMakeRepayment }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Loan ID</th>
            <th>Type</th>
            <th>Customer Name</th>
            <th>Customer ID</th>
            <th>EMI</th>
            <th>Balance</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.loanId}>
              <td>{loan.loanId}</td>
              <td>{loan.type}</td>
              <td>{loan.customerName}</td>
              <td>{loan.customerId}</td>
              <td>${loan.emi}</td>
              <td>${loan.balance}</td>
              <td>{loan.dueDate}</td>
              <td>
                <span
                  className={`badge ${
                    loan.status === 'DUE'
                      ? 'bg-danger'
                      : loan.status === 'PAID'
                      ? 'bg-success'
                      : 'bg-secondary'
                  }`}
                >
                  {loan.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => onMakeRepayment(loan.loanId)}
                >
                  Make Repayment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTable;
