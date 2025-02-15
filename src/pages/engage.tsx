
import { FaMedal, FaPoll } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Kudos from "./worklife/kudos";
import { useState } from "react";
import EngageFilter from "../components/engagefilter";


const Enage = () => {
  const navigate = useNavigate();
  const [selectedActivity,setSelectedActivity] = useState<string>("")

  const handleSeletedActivity = (label : string) => {
    setSelectedActivity(label)
  }
  


  return (
    <div className="ml-72 mt-20">
        {/* TopBar */}
      <div className="p-3 flex items-center flex-row m-5 border rounded-sm border-gray-200 ">
        <img src="/public/user-circle.svg" alt="user" className="w-10 h-10 " />
        <h2 className="text-md font-semibold text-gray-600 px-3">Hey Christal</h2>
        <div className="ml-40 space-x-2">
          <button
            className="border border-pink-500 bg-pink-100 hover:border-pink-200 rounded-md p-4"
            onClick={() => navigate("/engage/give-kudos")}
          >
            <FaMedal />
            <span className="text-xs">Give Kudos</span>
          </button>
          <button
            className="border border-green-500 bg-green-50 hover:border-green-200 rounded-md p-4"
            onClick={() => navigate("/engage/polls")}
          >
            <FaPoll />
            <span className="text-xs">Greate Poll</span>
          </button>
          <button
            className="border border-purple-500 bg-purple-100 hover:border-purple-200 rounded-md p-4"
            onClick={() => navigate("/engage/posts")}
          >
            <MdOutlinePostAdd />
            <span className="text-xs">Create posts</span>
          </button>
        </div>
      </div>

    {/* Filter */}
    <div className="flex">
    <EngageFilter OnSelectActivity={handleSeletedActivity} />
    <p >{selectedActivity || "All" }</p>
    <span>Sort</span>
    <Kudos />
    </div>
    </div>
  );
};

export default Enage;
