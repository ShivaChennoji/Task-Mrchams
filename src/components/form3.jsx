import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

function Form3() {
    const [formData, setFormData] = useState({
        petType: '',
        petName: '',
        breed: '',
        gender: '',
        age: '',
        sizeMicrochip: '',
        vaccination: '',
        spayedNeutered: '',
        healthIssues: '',
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
        navigate('/form4');
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <h2 className="section-title">Pet Details :</h2>

                <div className="form-row">
                    <div className="form-group">
                        <label>Pet Type</label>
                        <select name="petType" value={formData.petType} onChange={handleChange}>
                            <option value="">Select Here</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Pet Name</label>
                        <input
                            type="text"
                            name="petName"
                            value={formData.petName}
                            onChange={handleChange}
                            placeholder="Enter pet name"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Breed</label>
                        <input
                            type="text"
                            name="breed"
                            value={formData.breed}
                            onChange={handleChange}
                            placeholder="Enter breed"
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="">Select Here</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Unknown">Unknown</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="text"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter age"
                        />
                    </div>

                    <div className="form-group">
                        <label>Size / Microchip Number</label>
                        <input
                            type="text"
                            name="sizeMicrochip"
                            value={formData.sizeMicrochip}
                            onChange={handleChange}
                            placeholder="Enter size or microchip number"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Vaccination</label>
                        <input
                            type="text"
                            name="vaccination"
                            value={formData.vaccination}
                            onChange={handleChange}
                            placeholder="Enter vaccination details"
                        />
                    </div>

                    <div className="form-group">
                        <label>Spayed/Neutered</label>
                        <select
                            name="spayedNeutered"
                            value={formData.spayedNeutered}
                            onChange={handleChange}
                        >
                            <option value="">Select Here</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Unknown">Unknown</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group full-width">
                        <label>Health Issues or Special Needs</label>
                        <input
                            type="text"
                            name="healthIssues"
                            value={formData.healthIssues}
                            onChange={handleChange}
                            placeholder="Describe or enter none"
                        />
                    </div>
                </div>

                <div className="button-row">
                    <button type="button" className="back-btn" onClick={() => navigate('/form2')}>Back
                    </button>
                    <button type="submit" className="continue-btn">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form3;
