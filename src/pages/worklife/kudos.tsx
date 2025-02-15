import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Kudos = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<"Received" | "Given">("Received");
  const tabs: Array<"Received" | "Given"> = ["Received", "Given"];

  return (
    <div className="mt-12 p-6 ml-64">
      {/* Tab Navigation */}
      <div className="flex gap-6 text-gray-800 font-semibold">
        {tabs.map((item) => (
          <button
            key={item}
            onClick={() => setSelected(item)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selected === item
                ? "text-blue-600 underline underline-offset-4"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <hr className="border-gray-300 mt-4" />

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center mt-28 gap-4">
        <img
          src="/thumps-up.jpg"
          alt="thumbs-up"
          className="w-32 h-32 rounded-full object-cover shadow-md"
        />
        <h3 className="text-lg font-semibold text-gray-600">Get Going!</h3>
        <p className="text-sm text-gray-500 text-center">
          All the Kudos you have {selected === "Received" ? "received" : "given"} will appear here.
        </p>
        <button
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          onClick={() => navigate("/engage")}
        >
          Go to Engage
        </button>
      </div>
    </div>
  );
};

export default Kudos;
