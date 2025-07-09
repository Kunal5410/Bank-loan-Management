import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import bank from '../Images/bank-icon.png';
import home from '../Images/Home.png';
import customer from '../Images/Customer.png';
import loan from '../Images/Product.png';
import dollar from '../Images/dollar.png';
import reports from '../Images/Analytics.png';

function Header() {
    const location = useLocation();

    const getItemStyle = (path) => {
        return location.pathname === path
            ? { backgroundColor: '#d0e7ff', borderRadius: '5px', padding: '5px' }
            : {};
    };

    const getLinkClass = (path) => {
        return location.pathname === path
            ? 'nav-link text-primary fw-bold'
            : 'nav-link text-dark';
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h2 className="d-flex align-items-center">
                        <img src={bank} alt="Bank Icon" style={{ width: '24px', marginRight: '8px' }} />
                        <span className="navbar-brand text-dark fw-bold">BANK</span>
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
                            <li className="nav-item d-flex align-items-center" style={getItemStyle('/dashboard')}>
                                <img src={home} alt="Home Icon" style={{ width: '20px', marginRight: '8px' }} />
                                <Link className={getLinkClass('/dashboard')} to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center" style={getItemStyle('/customer-management')}>
                                <img src={customer} alt="Customer Icon" style={{ width: '20px', marginRight: '8px' }} />
                                <Link className={getLinkClass('/customer-management')} to="/customer-management">Customer Management</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center" style={getItemStyle('/loan-product-management')}>
                                <img src={loan} alt="Loan Icon" style={{ width: '20px', marginRight: '8px' }} />
                                <Link className={getLinkClass('/loan-product-management')} to="/loan-product-management">Loan Product Management</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center" style={getItemStyle('/repayment-management')}>
                                <img src={dollar} alt="Dollar Icon" style={{ width: '20px', marginRight: '8px' }} />
                                <Link className={getLinkClass('/repayment-management')} to="/repayment-management">Repayment Management</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center" style={getItemStyle('/reports-and-analytics')}>
                                <img src={reports} alt="Reports Icon" style={{ width: '20px', marginRight: '8px' }} />
                                <Link className={getLinkClass('/reports-and-analytics')} to="/reports-and-analytics">Reports and Analytics</Link>
                            </li>
                        </ul>

                        {/* Search Form */}
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success me-2" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
