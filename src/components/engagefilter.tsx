import { BsActivity } from "react-icons/bs";
import Input from "../ui/input";
import { FaMedal, FaPoll } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import { ChangeEvent, ReactNode, useState } from "react";

interface FilterState {
  icons: ReactNode;
  label: string;
  color: string;
}
interface EngageFilter {
  OnSelectActivity : (label : string) => void;
}
const EngageFilter: React.FC<EngageFilter> = ({ OnSelectActivity }) => {
  const [activities, setActivities] = useState<string>("All Activities");
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    OnSelectActivity(e.target.value); // Passing search value up on change
  };

  const handleActivity = (e: ChangeEvent<HTMLInputElement>) => {
    setActivities(e.target.value);
    OnSelectActivity(e.target.value); // Make sure the selected activity is passed up
  };

  const filterCheckBox: FilterState[] = [
    {
      icons: <BsActivity />,
      label: "All Activities",
      color: "red",
    },
    { icons: <FaMedal />, label: "Kudos", color: "pink" },
    {
      icons: <FaPoll />,
      label: "Polls",
      color: "green",
    },
    {
      icons: <MdOutlinePostAdd />,
      label: "Posts",
      color: "purple",
    },
  ];

  return (
    <div className="ml-5 border border-gray-200 w-1/5 space-y-2 p-4">
      <h2 className="text-md font-semibold">Filters</h2>
      <hr className="text-gray-200" />
      <h6 className="text-md font-semibold"> Activities</h6>
      {filterCheckBox.map((item, index) => (
        <div key={index} className="flex space-x-3 items-center">
          <input
            type="radio"
            value={item.label}
            checked={activities === item.label}
            onChange={handleActivity}
          />
          <span
            className={
              item.color === "red"
                ? "text-red-400"
                : item.color === "pink"
                ? "text-pink-400"
                : item.color === "green"
                ? "text-green-400"
                : "text-purple-400"
            }
          >
            {item.icons}
          </span>
          <label className="text-sm text-gray-600">{item.label}</label>
        </div>
      ))}
      <hr className="text-gray-200" />
      <div>
        <div className="relative flex items-center">
          <Input
            name="search"
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
            className="flex-1 border w-full rounded-md pl-10"
          />
          <img
            src="/search.svg"
            alt="search"
            className="w-5 h-5 absolute left-40 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default EngageFilter