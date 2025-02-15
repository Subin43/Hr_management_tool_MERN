import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
} from "react-icons/fa";
import Input from "../../../ui/input";
interface EmployeeState {
  employeename: string;
  employeNo: string;
}
const Givefeedback = () => {
  const navigate = useNavigate();
  const [Employee, setEmployee] = useState<EmployeeState>({
    employeename: "",
    employeNo: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      employeename: value,
    }));
  };
  return (
    <div className="flex flex-col m-16 p-4 border rounded-md border-gray-500">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-md font-semibold text-gray-600 ">Give Feedback</h1>
        <img
          src="/close-circle.svg"
          alt="close"
          className="w-6 h-6 "
          onClick={() => navigate("/feedback")}
        />
      </div>
      <div className="mt-4">
        <span className="text-sm text-gray-500">Search Employee</span>
        <span className="text-sm text-red-500">*</span>
      </div>
      <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 mt-2 w-3/5">
        <img src="/user-circle.svg" alt="use" className="w-4 h-4 mr-2" />
        <Input
          placeholder="Search by Emp No / Name"
          type="text"
          value={Employee.employeename}
          onChange={handleChange}
          name="searchFiled"
          className="outline-none flex-1 bg-transparent"
        />
        <img src="/search.svg" alt="search" className="w-4 h-4 ml-2" />
      </div>
      <div className="mt-6">
        <span className="text-sm text-gray-500">Your Feedback</span>
        <span className="text-sm text-red-500">*</span>

        <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded-t-md border border-gray-300">
          <button className="text-gray-600 hover:text-black text-lg">
            <FaBold size={10}/>
          </button>
          <button className="text-gray-600 hover:text-black text-lg">
            <FaItalic size={10}/>
          </button>
          <button className="text-gray-600 hover:text-black text-lg">
            <FaUnderline size={10}/>
          </button>
          <button className="text-gray-600 hover:text-black text-lg">
            <FaListUl size={10}/>
          </button>
          <button className="text-gray-600 hover:text-black text-lg">
            <FaListOl size={10}/>
          </button>
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Type your feedback here...."
          className="w-full h-32 p-3 border border-gray-300 rounded-b-md outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="space-x-3  flex items-center justify-end">
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Givefeedback;
