import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Forms5() {
  const [formData, setFormData] = useState({
    favouriteActivities: '',
    dietaryPreferences: '',
    otherInfo: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

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
    navigate('/Task-Mrchams/form6');
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <h2 className="section-title">Additional Details :</h2>

        <div className="form-group full-width">
          <label>Favorite Activities and toys</label>
          <input
            type="text"
            name="favouriteActivities"
            value={formData.favouriteActivities}
            onChange={handleChange}
            placeholder="Select Here"
          />
        </div>

        <div className="form-group full-width">
          <label>Dietary preferences or restrictions</label>
          <input
            type="text"
            name="dietaryPreferences"
            value={formData.dietaryPreferences}
            onChange={handleChange}
            placeholder="Select Here"
          />
        </div>

        <div className="form-group full-width">
          <label>Any other information that would help in rehoming</label>
          <textarea
            name="otherInfo"
            value={formData.otherInfo}
            onChange={handleChange}
            placeholder="Enter Here"
            className="textarea"
          />
        </div>

        <div className="button-row">
          <button type="button" className="back-btn" onClick={() => navigate(-1)}>
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

export default Forms5;
