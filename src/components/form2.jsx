import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

function Form2() {
    const [formData, setFormData] = useState({
        temperament: '',
        activityLevel: '',
        goodWithKids: '',
        goodWithCats: '',
        houseTrained: '',
        behaviourIssue: '',
    });
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
        navigate('/form3');
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <h2 className="section-title">Pet Information</h2>

                <div className="form-row">
                    <div className="form-group">
                        <label>Temperament</label>
                        <input
                            type="text"
                            name="temperament"
                            placeholder="Enter temperament"
                            value={formData.temperament}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Activity Level</label>
                        <input
                            type="text"
                            name="activityLevel"
                            placeholder="Enter activity level"
                            value={formData.activityLevel}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Good with Kids</label>
                        <input
                            type="text"
                            name="goodWithKids"
                            placeholder="Yes / No / Unknown"
                            value={formData.goodWithKids}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Good with Cats and Other Pets</label>
                        <input
                            type="text"
                            name="goodWithCats"
                            placeholder="Yes / No / Unknown"
                            value={formData.goodWithCats}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>House Trained / Potty Trained</label>
                        <input
                            type="text"
                            name="houseTrained"
                            placeholder="Yes / No / Partial"
                            value={formData.houseTrained}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Any Behaviour Issue</label>
                        <input
                            type="text"
                            name="behaviourIssue"
                            placeholder="Describe or Enter None"
                            value={formData.behaviourIssue}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="button-row">
                    <button type="button" className="back-btn" onClick={() => navigate('/form1')}>
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

export default Form2;
