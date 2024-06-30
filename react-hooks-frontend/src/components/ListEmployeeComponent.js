/*import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees, search, setSearchQuery] = useState([])

    useEffect(() => {

        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmployees();

        }).catch(error => {
            console.log(error);
        })

    }



    return (
        <div className="container">
            <h2 className="text-center"> List Employees </h2>
            <div>
                <Link to="/add-employee" className="btn btn-primary mb-2 add" > Add Employee </Link>

                <input type="text" placeholder="Search by name" value={search} onChange={onInputChange}/>
                <button type="submit">Search</button>

            </div>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Id </th>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Email Id </th>
                    <th> Salary </th>
                    <th> Designation </th>
                    <th> JoiningDate </th>
                    <th> DOB </th>
                    <th> Department </th>
                    <th> Location</th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td> {employee.id} </td>
                                    <td> {employee.firstName} </td>
                                    <td> {employee.lastName} </td>
                                    <td> {employee.emailId} </td>
                                    <td> {employee.salary} </td>
                                    <td> {employee.designation} </td>
                                    <td> {employee.joiningDate} </td>
                                    <td> {employee.dob} </td>
                                    <td> {employee.department} </td>
                                    <td> {employee.location} </td>
                                    <td>
                                        <Link className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</Link>
                                        <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}
                                            style={{ marginLeft: "10px" }}> Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.log(error);
        });
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredEmployees = employees.filter(employee => {
        const firstName = employee.firstName ? employee.firstName.toLowerCase() : '';
        const lastName = employee.lastName ? employee.lastName.toLowerCase() : '';
        const emailId = employee.emailId ? employee.emailId.toLowerCase() : '';
        
        return (
            firstName.includes(search.toLowerCase()) ||
            lastName.includes(search.toLowerCase()) ||
            emailId.includes(search.toLowerCase())
        );
    });

    return (
        <div className="container">
            <h2 className="text-center"> List Employees </h2>
            <div>
                <Link to="/add-employee" className="btn btn-primary mb-2 add"> Add Employee </Link>

                <input
                    type="text"
                    placeholder="Search by name or email"
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Email Id </th>
                        <th> Salary </th>
                        <th> Designation </th>
                        <th> Joining Date </th>
                        <th> DOB </th>
                        <th> Department </th>
                        <th> Location </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredEmployees.map(employee => (
                            <tr key={employee.id}>
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName} </td>
                                <td> {employee.emailId} </td>
                                <td> {employee.salary} </td>
                                <td> {employee.designation} </td>
                                <td> {employee.joiningDate} </td>
                                <td> {employee.dob} </td>
                                <td> {employee.department} </td>
                                <td> {employee.location} </td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link>
                                    <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)} style={{ marginLeft: "10px" }}> Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;


