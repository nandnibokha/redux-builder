import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate,} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateEmployee } from '../../Service/Action/employeAction';
const Update = () => {


    const location = useLocation();
    const navigate = useNavigate();
    const employee = location.state?.employee;
    const dispatch = useDispatch(); 

    const [updateInput, setUpdateInput] = useState({
        name: '',
        email: '',
        age: '',
        phoneNumber: '',
        password: '',
        city: '',
        address: '',
    });

    useEffect(() => {
       
        setUpdateInput(employee);
        
    }, [employee]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setUpdateInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(updateEmployee(updateInput)); 
        
        navigate('/view-data');
    };

    return (
        <>
            <div className="container" style={{ display: "block", width: 1200, padding: 30 }}>
                <h2 className="text-center text-danger mb-5">Employee Form</h2>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6 mb-2">
                        <label htmlFor="name" className="form-label text-danger-emphasis">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name" onChange={handleChange} value={updateInput.name} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="age" className="form-label text-danger-emphasis">Age</label>
                        <input type="number" className="form-control" id="age" name="age" placeholder="Enter Age" onChange={handleChange} value={updateInput.age} />
                    </div>
                    <div className="col-md-6 mb-2">
                        <label htmlFor="email" className="form-label text-danger-emphasis">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email" onChange={handleChange} value={updateInput.email} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phoneNumber" className="form-label text-danger-emphasis">Phone Number</label>
                        <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" onChange={handleChange} value={updateInput.phoneNumber} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-danger">Update</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Update;