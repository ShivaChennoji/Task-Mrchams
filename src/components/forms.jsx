import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Forms() {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    address: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      setSubmitted(true);
      navigate('/form2');
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <h2 className="section-title">Owner Information</h2>

        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter Here"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Here"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Here"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter Here"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className=" checkbox-row">
          <input
            type="checkbox"
            name="agree"
            checked={formData?.agree}
            onChange={handleChange}
          />
          <span>
            I have read and agree to the Terms and Privacy Policy?
          </span>
        </div>


        <button type="submit" className="continue-btn">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Forms;
