import React from 'react';
import { Link } from 'react-router-dom';
import bank from '../Images/bank-icon.png';
import home from '../Images/Home.png'
import customer from '../Images/Customer.png';
import Loan from '../Images/Product.png';
import application from '../Images/application.png';
import dollar from '../Images/dollar.png';
import reports from '../Images/Analytics.png';


function Slidebar() {
    return (
        <div className="d-flex">
            <div className="bg-light border-end p-3" style={{ width: '25vw', minHeight: '100vh' }}>
                <h2 className="mb-4 d-flex align-items-center">
                    <img src={bank} alt="" style={{ width: '24px', marginRight: '8px' }} />
                    <Link className="navbar-brand text-primary fw-bold" to="/">BANK</Link>
                </h2>
                <ul className="nav flex-column">
                    <li className="nav-item d-flex align-items-center mb-1">
                        <img src={home} alt="" style={{ width: '20px', marginRight: '8px' }} />
                        <Link className="nav-link active text-dark rounded" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center mb-1">
                        <img src={customer} alt="" style={{ width: '20px', marginRight: '8px' }} />
                        <Link className="nav-link text-dark" to="/customer-management">Customer Management</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center mb-1">
                        <img src={Loan} alt="" style={{ width: '20px', marginRight: '8px' }} />
                        <Link className="nav-link text-dark" to="/loan-product-management">Loan Product Management</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center mb-1">
                        <img src={application} alt="" style={{ width: '20px', marginRight: '8px' }} />
                        <Link className="nav-link text-dark" to="/loan-application-management">Loan Application Management</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center mb-1">
                        <img src={dollar} alt="" style={{ width: '20px', marginRight: '8px' }} />
                        <Link className="nav-link text-dark" to="/repayment-management">Repayment Management</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center mb-1">
                        <img src={reports} alt="" style={{ width: '20px', marginRight: '8px' }} />
                        <Link className="nav-link text-dark" to="/reports-and-analytics">Reports and Analytics</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Slidebar;
