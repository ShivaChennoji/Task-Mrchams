import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../app.css'; 

function Forms6() {
  const navigate = useNavigate();

  return (
    <div className="form-wrapper">
      <form>
        <h2 className="section-title">Upload Images of your pet :</h2>
        <div className="upload-grid">
          <div className="upload-box">
            <i className="icon camera" />
          </div>
          <div className="upload-box">
            <i className="icon camera" />
          </div>
        </div>

        <h2 className="section-title">Upload Images of your pet : <span className="optional">(Optional)</span></h2>
        <div className="upload-grid">
          <div className="upload-box">
            <i className="icon video" />
          </div>
          <div className="upload-box">
            <i className="icon video" />
          </div>
        </div>

        <div className="button-row">
          <button type="button" className="back-btn" onClick={() => navigate('/form5')}> Back
          </button>
          <button type="button" className="continue-btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms6;
