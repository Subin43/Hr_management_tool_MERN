// Sidebar Component
import { useState } from "react";
import { Link } from "react-router-dom";
import { SideMenuBar } from "../utils/sidebarmenu";

const SideBar = () => {
  const loggedInUser= "Christal";
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <div className=" fixed top-0 left-0 w-64 h-screen bg-white dark:bg-gray-800 p-6 space-y-4 shadow-md z-50">
      {/* Profile Section */}
      <div className="flex  items-center justify-between w-full  mb-6">        
        <img src="/user-circle.svg" alt="Profile" className="w-8 h-8 " />        
        <div className=" ml-2">
        <h2 className="text-sm font-semibold">Hi {loggedInUser}</h2>
        <Link to="/profile" className="text-blue-500 text-sm hover:underline">
          View My Info
        </Link>
        </div>
        <Link to="/settings">
          <img src="/settings.svg" alt="Settings" className="w-4 h-4 mt-2" />
        </Link>
      </div>

      {/* Sidebar Menu */}
      {SideMenuBar.map((sidebar) => (
        <div key={sidebar.label}>
          <div
            onClick={() => toggleMenu(sidebar.label)}
            className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100 rounded-md"
          >        
              <Link to={sidebar.path!} className="flex items-center gap-3">
              <img src={sidebar.icons} width={20} height={20} alt={sidebar.label} />
              <span className="text-sm text-gray-500 hover:text-blue-500">{sidebar.label}</span>              
              </Link>
            {sidebar.subMenu && (
              <span className="text-xs ">{expandedMenu === sidebar.label ? "▲" : "▼"}</span>
            )}
          </div>

          {/* Submenu */}
          {sidebar.subMenu && expandedMenu === sidebar.label && (
            <div className="ml-10 space-y-2 flex flex-col mt-2 gap-2">
              {sidebar.subMenu.map((subItem) => (
                <Link
                  key={subItem.label}
                  to={subItem.path!}
                  className="text-gray-500 hover:text-blue-500 text-sm"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;