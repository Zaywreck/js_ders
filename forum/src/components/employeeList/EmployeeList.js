import React from 'react'
import Employee from '../employee/Employee'


export default function EmployeeList({ employees, setList, setSelectedEmployee }) {

    const handleClearAll = () => {
        setList([])
    }

    const handleRemove = (id) => {
        setList(employees.filter(emp => emp.id !== id))
    }

    return (
        <div>
            <h2>Employee List {employees.length}</h2>
            {employees.map((emp, index) => (
                <Employee
                    setSelectedEmployee={setSelectedEmployee}
                    key={index}
                    employee={emp}
                    handleRemove={handleRemove} />
            ))
            }
            <button onClick={handleClearAll}>Clear</button>
        </div>
    )
}
