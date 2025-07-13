import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add login logic here (e.g., API call)
    navigate('/dashboard');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '350px', borderRadius: '20px' }}>
        <h3 className="text-center text-primary mb-4">Sign In</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-3 text-end">
            <a href="#" className="small text-primary">Forgot Password?</a>
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>

        <div className="text-center mt-4">
          <small className="text-muted">Or Sign in with</small>
          <div className="d-flex justify-content-center gap-3 mt-2">
            <button className="btn btn-outline-dark rounded-circle p-2">
              <i className="bi bi-google"></i>
            </button>
            <button className="btn btn-outline-dark rounded-circle p-2">
              <i className="bi bi-apple"></i>
            </button>
            <button className="btn btn-outline-dark rounded-circle p-2">
              <i className="bi bi-twitter"></i>
            </button>
          </div>
        </div>

        <div className="text-center mt-3">
          <a href="#" className="small text-primary">Learn user licence agreement</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
