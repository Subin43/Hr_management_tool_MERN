import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
} from "react-icons/fa";
import Input from "../../../ui/input";

interface EmployeeState {
  employeeNo: string;
  employeeName: string;
}

const RequestFeedback = () => {
  const navigate = useNavigate();
  const [Employee, setEmployee] = useState<EmployeeState>({
    employeeNo: "",
    employeeName: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      employeeName: value,
    }));
  };

  return (
    <div className="flex flex-col m-16 p-4 border rounded-md border-gray-500">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <h1 className="text-gray-600 font-semibold">Request Feedback</h1>
        <img
          src="/close-circle.svg"
          alt="close"
          className="w-6 h-6 cursor-pointer"
          onClick={() => navigate("/feedback")}
        />
      </div>

      {/* Search Input */}
      <div className="mt-6">
        <span className="text-sm text-gray-600">Search Employee</span>
        <span className="text-red-500">*</span>

        <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 mt-2 w-3/5">
          <img src="/user-circle.svg" alt="user" className="w-6 h-6 mr-2" />
          <Input
            type="text"
            name="searchQuery"
            placeholder="Search by Emp No. / Name"
            value={Employee.employeeName}
            onChange={handleChange}
            className="outline-none flex-1 bg-transparent "
          />
          <img
            src="/search.svg"
            alt="search"
            className="w-5 h-5 ml-2 cursor-pointer"
          />
        </div>
      </div>

      {/* Personalized Message */}
      <div className="mt-6">
        <span className="text-sm text-gray-600">
          Include a personalised message
        </span>
        <span className="text-red-500">*</span>

        <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded-t-md border border-gray-300">
          <button className="text-gray-600 hover:text-black text-lg">
            <FaBold size={10}/>
          </button>
          <button className="text-gray-600 hover:text-black text-lg">
            <FaItalic size={10}/>
          </button>
          <button className="text-gray-600 hover:text-black text-lg">
            <FaUnderline size={10} />
          </button>
          <button className="text-gray-600 hover:text-black text-lg">
            <FaListUl size={10}/>
          </button>
          <button className="text-gray-600 hover:text-black text-lg">
            <FaListOl size={10}/>
          </button>
        </div>

        <textarea
          placeholder="Write feedback here..."
          className="w-full h-32 p-2 border border-gray-300 rounded-b-md outline-none"
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

export default RequestFeedback;
