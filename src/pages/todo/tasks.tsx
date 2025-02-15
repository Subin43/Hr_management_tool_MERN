import { useNavigate } from "react-router-dom";

const Tasks = () => {

    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center mt-56 space-y-4">
      <img src="/task.svg" alt="tasks" className="w-20 h-20 "></img>
      <p className="text-xs text-gray-500">
        You haven't added any tasks yet! Start by creating new tasks or
        configuring checklists.
      </p>
      <button
        className="px-3 py-1 rounded-md bg-blue-500  hover:bg-blue-600"
        onClick={() => navigate("/tasks/addtask")}
      >
        Add new task
      </button>
    </div>
  );
};

export default Tasks;
