import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [salary, setSalary] = useState('')
    const [designation, setDesignation] = useState('')
    const [joiningDate, setJoiningDate] = useState('')
    const [dob, setDob] = useState('')
    const [department, setDepartment] = useState('')
    const [location, setLocation] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, emailId, salary, designation, joiningDate, dob, department, location}

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {
                history.push('/employees')
            }).catch(error => {
                console.log(error)
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.data)
    
                history.push('/employees');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
            setSalary(response.data.salary)
            setDesignation(response.data.designation)
            setJoiningDate(response.data.joiningDate)
            setDob(response.data.dob)
            setDepartment(response.data.department)
            setLocation(response.data.location)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Salary :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter Salary"
                                        name = "salary"
                                        className = "form-control"
                                        value = {salary}
                                        onChange = {(e) => setSalary(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Designation :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Designation"
                                        name = "designation"
                                        className = "form-control"
                                        value = {designation}
                                        onChange = {(e) => setDesignation(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Joining Date :</label>
                                    <input
                                        type = "date"
                                        placeholder = "Enter Joining Date"
                                        name = "joiningDate"
                                        className = "form-control"
                                        value = {joiningDate}
                                        onChange = {(e) => setJoiningDate(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Date of Birth :</label>
                                    <input
                                        type = "date"
                                        placeholder = "Enter Date of Birth"
                                        name = "dob"
                                        className = "form-control"
                                        value = {dob}
                                        onChange = {(e) => setDob(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Department :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Department"
                                        name = "department"
                                        className = "form-control"
                                        value = {department}
                                        onChange = {(e) => setDepartment(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Location :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Location"
                                        name = "location"
                                        className = "form-control"
                                        value = {location}
                                        onChange = {(e) => setLocation(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent
