import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from '../../Service/Action/employeAction';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ViewData = () => {
  const { employees } = useSelector((state) => state.employeReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleEdit = (employee) => {
    navigate('/update', { state: { employee } });
  };

  return (
    <>
    <div className="container pt-5">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className='text-danger'>#</TableCell>
              <TableCell className='text-danger'>Name</TableCell>
              <TableCell className='text-danger' align="right">Age</TableCell>
              <TableCell className='text-danger' align="right">Email</TableCell>
              <TableCell className='text-danger' align="right">PhoneNumber</TableCell>
              <TableCell className='text-danger' align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={employee.id}>
                <TableCell className='text-danger-emphasis'>{index + 1}</TableCell>
                <TableCell className='text-danger-emphasis'>{employee.name}</TableCell>
                <TableCell className='text-danger-emphasis' align="right">{employee.age}</TableCell>
                <TableCell className='text-danger-emphasis' align="right">{employee.email}</TableCell>
                <TableCell className='text-danger-emphasis' align="right">{employee.phoneNumber}</TableCell>
                <TableCell className='text-danger-emphasis' align="right">
                  <button className='btn btn-danger' onClick={() => handleEdit(employee)}>Edit</button> ||
                  <button className='btn btn-danger' onClick={() => handleDelete(employee.id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
  );
};

export default ViewData;