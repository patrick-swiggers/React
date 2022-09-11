import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {

  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1, name: 'Dirk', role: 'Driver', img: './assets/dirk_1640114555.jpeg'
      },
      {
        id: 2, name: 'James', role: 'Driver', img: './assets/james_1640114579.jpeg'
      },
      {
        id: 3, name: 'Julie', role: 'Logistics', img: './assets/julie_1640114250.jpeg'
      },
      {
        id: 4, name: 'Pauline', role: 'Marketing', img: './assets/pauline_1640114384.jpeg'
      },
      {
        id: 5, name: 'Philip', role: 'Marketing', img: './assets/philip_1640114355.jpeg'
      },
      {
        id: 6, name: 'Patrick', role: 'Intern', img: './assets/no-img_1640114326.jpeg'
      }
    ]
  );

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map(
      (employee) => {
        if(id == employee.id){
          // return new
          return{...employee, name:newName,role:newRole }
        } else {
          return employee;
        }
      }
    );
    setEmployees(updatedEmployees)
  }

  function addEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    };
    setEmployees([...employees, newEmployee ])
  }


  return (
    <div className="App">
      {/* <input
          type="text"
          onChange={(e) => { 
            console.log(e.target.value);
            setRole(e.target.value);
          }}
        /> */}

      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          const editEmployee = (
            <EditEmployee 
              id={employee.id} 
              name={employee.name} 
              role={employee.role} 
              updateEmployee={updateEmployee}
            />
          );
          return (<Employee 
            key= {employee.id}  /* {uuidv4()}  npm install uuid */
            id= {employee.id}
            name={employee.name} 
            role={employee.role} 
            img={employee.img} 
            editEmployee={editEmployee}/>
          );
        })}

      </div>
      <AddEmployee addEmployee={addEmployee}/>

    </div>
  );
}

export default App;
