
import React, { ReactNode } from "react";

interface SimpleCardProps {
  title: string;
  desc?: string;
  img?: string;
  buttonText?: string;
  onClick?: () => void;
  children ?: ReactNode;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  title,
  desc,
  img,
  buttonText = "Click Me",
  onClick,
  children,
}) => {
  return (
    <div className="lg:w-80 sm:w-32 md:w-56 bg-gray-50 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">    
      {/* Content Section*/}
      <div className="p-4">
        <h1 className="text-md font-semibold text-gray-500 mb-2">{title}</h1>
        {/* Image Section */}
      {img && (
        <img src={img} alt={title} className="h-20 w-20 ml-16" />
      )}
        <h4 className="text-md text-gray-500">{desc}</h4>
      </div>
      {/*Button Section */}
      <div className="p-4">
        {buttonText && <button onClick={onClick}
        className="w-40 items-center justify-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">{buttonText}</button>}
      </div>
      {
        children
      }
    </div>
  );
};

export default SimpleCard;
