import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import bank from '../Images/bank-icon.png';
import home from '../Images/Home.png';
import customer from '../Images/Customer.png';
import Loan from '../Images/Product.png';
import application from '../Images/application.png';
import dollar from '../Images/dollar.png';
import reports from '../Images/Analytics.png';

function Slidebar() {
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
        <div className="d-flex">
            <div className="bg-light border-end p-3" style={{ width: '25vw', minHeight: '100vh' }}>
                <h2 className="mb-4 d-flex align-items-center">
                    <img src={bank} alt="Bank Icon" style={{ width: '24px', marginRight: '8px' }} />
                    <span className="navbar-brand text-dark fw-bold">BANK</span>

                </h2>
                <ul className="nav flex-column">
                    <li className="nav-item d-flex align-items-center mb-1" style={getItemStyle('/dashboard')}>
                        <img src={home} alt="" style={{ width: '20px', marginRight: '8px' }} />
                        <Link className={getLinkClass('/dashboard')} to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center mb-1" style={getItemStyle('/customer-management')}>
                        <img src={customer} alt="" style={{ width: '20px', marginRight: '8px' }} />
                        <Link className={getLinkClass('/customer-management')} to="/customer-management">Customer Management</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center mb-1" style={getItemStyle('/loan-product-management')}>
                        <img src={Loan} alt="" style={{ width: '20px', marginRight: '8px' }} />
                        <Link className={getLinkClass('/loan-product-management')} to="/loan-product-management">Loan Product Management</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center mb-1" style={getItemStyle('/loan-application-management')}>
                        <img src={application} alt="" style={{ width: '20px', marginRight: '8px' }} />
                        <Link className={getLinkClass('/loan-application-management')} to="/loan-application-management">Loan Application Management</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center mb-1" style={getItemStyle('/repayment-management')}>
                        <img src={dollar} alt="" style={{ width: '20px', marginRight: '8px' }} />
                        <Link className={getLinkClass('/repayment-management')} to="/repayment-management">Repayment Management</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center mb-1" style={getItemStyle('/reports-and-analytics')}>
                        <img src={reports} alt="" style={{ width: '20px', marginRight: '8px' }} />
                        <Link className={getLinkClass('/reports-and-analytics')} to="/reports-and-analytics">Reports and Analytics</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Slidebar;
