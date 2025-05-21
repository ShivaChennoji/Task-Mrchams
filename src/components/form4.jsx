import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

function Form4() {
  const [formData, setFormData] = useState({
    explanation: '',
    availableFrom: '',
    petSupplies: '',
  });

  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    navigate('/form5');
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <h2 className="section-title">Reason for Rehoming :</h2>

        <div className="form-row">
          <div className="form-group full-width">
            <label>Explanation of why the pet is being Rehomed</label>
            <textarea
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
              placeholder="Enter here"
              className="textarea"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Available from</label>
            <input
              type="date"
              name="availableFrom"
              value={formData.availableFrom}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Can you provide pet Supplies</label>
            <select
              name="petSupplies"
              value={formData.petSupplies}
              onChange={handleChange}
            >
              <option value="">Select Here</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Some">Some</option>
            </select>
          </div>
        </div>

        <div className="button-row">
          <button type="button" className="back-btn" onClick={() => navigate('/form3')}>
        Back
          </button>
          <button type="submit" className="continue-btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form4;
