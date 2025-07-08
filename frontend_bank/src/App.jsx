import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Slidebar from './Components/Slidebar';
import Starting from './Components/Loan-product/Starting';
import Four_heros from './Components/Loan-product/Four_heros';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 990);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="d-flex">
        {!isMobile && <Slidebar />}

        <div style={{ flex: 1 }}>
          {isMobile && <Header />}

          <Routes>
            <Route
              path="/dashboard"
              element={
                <>
                  <Starting
                    heading="Dashboard"
                    description="Overview of bank operations and metrics." />

                </>
              }
            />

            <Route
              path="/customer-management"
              element={
                <>
                  <Starting
                    heading="Customer Management"
                    description="Manage customer profiles and accounts."
                  />
                </>
              }
            />

            <Route
              path="/loan-product-management"
              element={
                <>
                  <Starting
                    heading="Loan Product Management"
                    description="Configure and manage loan products offered by the bank."
                  />
                  <Four_heros/>
                </>
              }
            />

            <Route
              path="/loan-application-management"
              element={
                <>
                  <Starting
                    heading="Loan Application Management"
                    description="Review and process loan applications."
                  />
                </>
              }
            />

            <Route
              path="/repayment-management"
              element={
                <>
                  <Starting
                    heading="Repayment Management"
                    description="Track and manage loan repayments."
                  />
                </>


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
    </Router>
  );
}

export default App;
