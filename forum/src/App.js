import { useState } from "react";
import EmployeeAdd from "./components/employeeAdd/EmployeeAdd";
import EmployeeList from "./components/employeeList/EmployeeList";
import EmployeeUpdate from "./components/employeeUpdate/EmployeeUpdate";

function App() {

  const [list, setList] = useState();
  const [selectedEmployee, setSelectedEmployee] = useState({
    id: 0,
    firstName: '',
    lastName: '',
  });

  return (
    <div>
      <h1>Employees App</h1>
      <EmployeeList
        setSelectedEmployee={setSelectedEmployee}
        employees={list}
        setList={setList} /> 
      <EmployeeAdd employees={list} setList={setList} />
      <EmployeeUpdate
        employees={list}
        setList={setList}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee} />
    </div>
  )
}

export default App;