import { ChangeEvent} from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface TopBarProps {
  setTheme : (theme : string) => void;
}
const TopBar:React.FC<TopBarProps>= ({ setTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const routeMap: { [key: string]: string } = {
    task: "/task",
    help: "greythr-help",
    report: "/monthly-report",
  };

  const handleNavigation = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const targetValue = routeMap[selectedValue];
    if (targetValue) {
      navigate(targetValue);
    }
  };

  const toggleTheme = () => {
    const newTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-white dark:bg-gray-800 dark:text-gray-50 shadow-md flex items-center justify-between px-6 z-50">
      {/* Current Path */}
      <span className="text-gray-600 capitalize">
        {location.pathname.replace("/", "") || "Home"}
      </span>
      {/* Icons */}
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="focus:outline-none">
          {document.documentElement.classList.contains("dark") ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-700" />
          )}
        </button>
        {/* Quick Linkswith dropdown */}
        <select
          className="text-sm text-gray-500 cursor-pointer focus:outline-none"
          onChange={handleNavigation}
        >
          <option value="" selected>
            Quick Links
          </option>
          <option value="task">Task</option>
          <option value="greytHr">Getting Started with greytHR</option>
        </select>
        <Link to="/notification">
          <img
            src="/notification.svg"
            alt="Notification"
            className="w-5 h-5 cursor-pointer"
          />
        </Link>
        <Link to="/signout">
          <img
            src="/power-shutdown.svg"
            alt="Logout"
            className="w-5 h-5 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
