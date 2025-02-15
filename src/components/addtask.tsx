import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/input";

const AddTask = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState([
    {
      taskName: "",
      tags: "",
      dueDate: "",
    },
  ]);
  const [file,setFile ]  = useState<File | null>(null);
  const [error,setError] = useState<string>("");
  const [priority, setPriority] = useState("Low");
  const checkBoxItem = ["Low", "Medium", "High"];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTask((prev) => [
      {
        ...prev[0],
        [name]: value,
      },
    ]);
  };

  const handlePriorityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value);
  };

  const handleFile =  (e: ChangeEvent<HTMLInputElement>):void => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
        if (selectedFile.size > 1000 * 1024) {
            setError("File size exceeds 1 MB");
            setFile(null);
        }
        else {
            setError("")
            setFile(selectedFile)
        }
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 mr-0 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-md text-gray-600 font-serif font-semibold">Add Task</h1>
        <img
          src="/close-circle.svg"
          alt="close"
          className="w-6 h-6 cursor-pointer"
          onClick={() => navigate("/feedback")}
        />
      </div>
      <div className="mt-6">
        {/* Task Name */}
        <div className="flex items-center mb-4">
          <label className="w-1/4 text-sm text-gray-500">Task Name<span className="text-red-500">*</span></label>
          <div className="flex-1">
            <Input
              placeholder="e.g. Collect documents"
              type="text"
              value={task[0].taskName}
              onChange={handleChange}
              className="outline-none flex-1 border border-gray-500 px-3 py-1 rounded"
              name="taskName"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center mb-4">
          <label className="w-1/4 text-sm text-gray-500">Tags</label>
          <div className="flex-1">
            <Input
              placeholder="e.g. Important"
              type="text"
              value={task[0].tags}
              onChange={handleChange}
              className="outline-none flex-1 border border-gray-500 px-3 py-1 rounded"
              name="tags"
            />
          </div>
        </div>

        {/* Due Date */}
        <div className="flex items-center mb-4">
          <label className="w-1/4 text-sm text-gray-500">Due Date</label>
          <div className="flex-1">
            <Input
              placeholder="Enter Date"
              type="date"
              value={task[0].dueDate}
              onChange={handleChange}
              className="outline-none flex-1 border border-gray-500 px-3 py-1 rounded"
              name="dueDate"
            />
          </div>
        </div>

        {/* Priority */}
        <div className="flex items-center mb-4">
          <label className="w-1/4 text-sm text-gray-500">Priority</label>
          <div className="flex-1">
            {checkBoxItem.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="radio"
                  value={item}
                  checked={priority === item}
                  onChange={handlePriorityChange}
                  className="mr-2"
                />
                <label className="text-sm text-gray-600">{item}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className=" mb-4">
          <label className="w-1/4 text-sm text-gray-500">Description</label>          
        </div>
        <textarea
            placeholder="Write description"
            className="flex-1 border border-gray-500 px-3 py-1 rounded w-full"
          />
      </div>

      {/* Attch */}
      <div className="mt-2">
      <input type="file" onChange={handleFile}/>
      {
        error && (
            <p className="text-sm text-red-500">
                {error}
            </p>
        )
        
      }   
      </div>
      <div className="space-x-3  flex items-center justify-end">
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
            Submit
          </button>
          </div> 
    </div>
  );
};

export default AddTask;
