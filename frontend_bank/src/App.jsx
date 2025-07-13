import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Slidebar from './Components/Slidebar';
import Starting from './Components/Loan-product/Starting';
import RepaymentDashboard from './Components/Repayment/RepaymentDashboard';
import Loan_product_dashboard from './Components/Loan-product/Loan_product_dashboard';
import Login_page from './Components/Login/Login_page';
import Four_heros from './Components/Loan-product/Four_heros';

function AppContent() {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const isRootPath = location.pathname === '/';

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 990);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="d-flex">
      {!isMobile && !isRootPath && <Slidebar />}
      <div style={{ flex: 1 }}>
        {isMobile && !isRootPath && <Header />}

        <Routes>
          <Route
            path="/"
            element={
              // <Starting
              //   heading="/"
              //   description="Overview of bank operations and metrics."
              // />
              <Login_page/>
            }
          />

          <Route
            path="/dashboard"
            element={
              <Starting
                heading="Dashboard"
                description="Overview of bank operations and metrics."
              />
            }
          />

          <Route
            path="/customer-management"
            element={
              <Starting
                heading="Customer Management"
                description="Manage customer profiles and accounts."
              />
            }
          />

          <Route
            path="/loan-product-management"
            element={<Loan_product_dashboard />}
          />

          <Route
            path="/loan-application-management"
            element={
              <Starting
                heading="Loan Application Management"
                description="Review and process loan applications."
              />
            }
          />

          <Route
            path="/repayment-management"
            element={
              <div>
                <Starting
                  heading="Repayment Management"
                  description="Track and manage loan repayments."
                />
                <RepaymentDashboard />
              </div>
            }
          />

          <Route
            path="/reports-and-analytics"
            element={
              <>
              <Starting
                heading="Reports and Analytics"
                description="View performance reports and analytics."
              />
             
              </>

            }
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
