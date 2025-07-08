import React from 'react';
import { Link } from 'react-router-dom';

// Importing icons
import bank from '../Images/bank-icon.png';
import home from '../Images/Home.png';
import customer from '../Images/Customer.png';
import loan from '../Images/Product.png';
import dollar from '../Images/dollar.png';
import reports from '../Images/Analytics.png';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    
                    <h2 className="d-flex align-items-center">
                        <img src={bank} alt="Bank Icon" style={{ width: '24px', marginRight: '8px' }} />
                        <Link className="navbar-brand" to="/">BANK</Link>
                    </h2>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item d-flex align-items-center">
                                <img src={home} alt="Home Icon" style={{ width: '20px', marginRight: '8px' }} />
                                <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <img src={customer} alt="Customer Icon" style={{ width: '20px', marginRight: '8px' }} />
                                <Link className="nav-link" to="/customer-management">Customer Management</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <img src={loan} alt="Loan Icon" style={{ width: '20px', marginRight: '8px' }} />
                                <Link className="nav-link" to="/loan-product-management">Loan Product Management</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <img src={dollar} alt="Dollar Icon" style={{ width: '20px', marginRight: '8px' }} />
                                <Link className="nav-link" to="/repayment-management">Repayment Management</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <img src={reports} alt="Reports Icon" style={{ width: '20px', marginRight: '8px' }} />
                                <Link className="nav-link" to="/reports-and-analytics">Reports and Analytics</Link>
                            </li>
                        </ul>

                        {/* Search Form */}
                        <form className="d-flex" role="search">
                            <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success me-2" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
