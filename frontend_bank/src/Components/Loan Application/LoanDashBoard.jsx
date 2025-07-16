import React, { useState } from "react";
import LoanTable from "./LoanTable";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md"; // Clear icon

const loanApplications = [
  {
    applicationId: "APP001",
    date: "2024-01-15",
    customerName: "John Anderson",
    loanType: "Personal Loan",
    amount: "$25,000",
    duration: "36m",
    status: "PENDING",
  },
  {
    applicationId: "APP002",
    date: "2024-02-10",
    customerName: "Sarah Williams",
    loanType: "Home Loan",
    amount: "$150,000",
    duration: "240m",
    status: "APPROVED",
  },
  {
    applicationId: "APP003",
    date: "2024-03-05",
    customerName: "Michael Lee",
    loanType: "Auto Loan",
    amount: "$30,000",
    duration: "60m",
    status: "REJECTED",
  },
  {
    applicationId: "APP004",
    date: "2024-04-20",
    customerName: "Emily Clark",
    loanType: "Education Loan",
    amount: "$40,000",
    duration: "48m",
    status: "PENDING",
  },
];

function LoanDashboard() {
  const [searchInput, setSearchInput] = useState("");
  const [searchId, setSearchId] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const handleSearchClick = () => {
    setSearchId(searchInput);
  };

  const handleClearFilters = () => {
    setSearchInput("");
    setSearchId("");
    setStatusFilter("ALL");
  };

  const filteredData = loanApplications.filter((app) => {
    const matchesSearch = app.applicationId.toLowerCase().includes(searchId.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container mt-4">
      <h4>Loan Applications</h4>

      {/* Search Bar with Icon */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Application ID"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="btn btn-outline-secondary" onClick={handleSearchClick}>
          <FaSearch />
        </button>
        <button className="btn btn-outline-danger" onClick={handleClearFilters}>
          <MdClear />
        </button>
      </div>

      {/* Status Filter Buttons */}
      <div className="btn-group mb-3" role="group">
        {["ALL", "PENDING", "APPROVED", "REJECTED"].map((status) => (
          <button
            key={status}
            className={`btn btn-outline-primary ${statusFilter === status ? "active" : ""}`}
            onClick={() => setStatusFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      <LoanTable data={filteredData} />
    </div>
  );
}

export default LoanDashboard;
