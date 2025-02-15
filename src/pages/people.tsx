import { ChangeEvent, useState } from "react"
import Input from "../ui/input";
import { FaFilter } from "react-icons/fa";

interface EmployeeState {
   employeeName : string;
   employeeNo   : string;
}
const People = () => {
  const [selected,setSelected] = useState<"Started" | "Everyone">("Started");
  const [employee,setEmployee] =  useState<EmployeeState>(
    {
      employeeName : "",
      employeeNo   : ""
    }
  )
  const [clicked,setClicked] = useState<boolean>(false)
  const tabs : Array<"Started" | "Everyone"> = [
    "Started",
    "Everyone"
  ]
  const handleEmployee = (e:ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    if (/^\d+$/.test(value)){
      setEmployee((prev) => ({
        ...prev, employeeNo : value, employeeName : ""
      }))
    }
    else {
      setEmployee((prev) => ({
        ...prev, employeeName:value, employeeNo : ""
      }))
    }
  }

  return (
    <div className="mt-20 ml-72">
        
          {
            tabs.map((tab,index) => (
              <button className={`px-3 py-2 cursor-pointer 
                ${selected === tab ? "text-black font-bold border-b-2 border-blue-500" : "text-gray-400 "} `}
                onClick={() =>  setSelected(tab)}
              key={index}
              >
                {tab}
              </button>
            ))
           
          }
          <div className="flex border border-gray-300 rounded-lg overflow-hidden w-1/4 items-center px-2 py-1">
          <Input 
            type="EmployeeName"
            placeholder="Enter Emp.Name or ID"
            value={employee.employeeName || employee.employeeNo}
            onChange={handleEmployee}
            name="employeeName || employeeNo"
            className="flex-grow outline-none px-3 py-2 text-gray-600"
          />
          <img src="/search.svg" alt="search" className="w-5 h-5 mx-2 cursor-pointer" />
<button onClick={() => setClicked(prev => !prev)}>
  <FaFilter className="text-gray-500 w-5 h-5" />
</button>
          
        </div>
        {!employee.employeeName && !employee.employeeNo && (
  <p className="text-gray-400 r mt-4">
    Looks like you don't have any records
  </p>
)}
      
    </div>
  )
}

export default People