import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { employeedata } from '../../Service/Action/employeAction';
import { useNavigate } from 'react-router-dom';

const EmployeeForm = () => {


    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        age: '',
        phoneNumber: '',
        password: '',
        city: '',
        address: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();


        dispatch(employeedata(formInput));

        navigate('/view-data');

        setFormInput({
            name: '',
            email: '',
            age: '',
            phoneNumber: '',
            password: '',
            city: '',
            address: '',
        });
    };

    return (
        <>
            <div className="container" style={{ display: "block", width: 1200, padding: 30 }}>
                <h2 className="text-center mb-5 text-danger">Employee Form</h2>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6 mb-2">
                        <label htmlFor="name" className="form-label text-danger-emphasis">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name" onChange={handleChange} value={formInput.name} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="age" className="form-label text-danger-emphasis">Age</label>
                        <input type="number" className="form-control" id="age" name="age" placeholder="Enter Age" onChange={handleChange} value={formInput.age} />
                    </div>
                    <div className="col-md-6 mb-2">
                        <label htmlFor="email" className="form-label text-danger-emphasis">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email" onChange={handleChange} value={formInput.email} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phoneNumber" className="form-label text-danger-emphasis">Phone Number</label>
                        <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" onChange={handleChange} value={formInput.phoneNumber} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EmployeeForm;