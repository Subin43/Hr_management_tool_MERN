import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedBack = () => {
  const [selected, setSelected] = useState<
    "Received" | "Given" | "Pending Request" | "Drafts"
  >("Received");
    const tabs: Array<"Received" | "Given" | "Pending Request" | "Drafts"> = [
    "Received",
    "Given",
    "Pending Request",
    "Drafts",
  ];
  const navigate = useNavigate()
  return (
    <div className="mt-16 ml-64 p-6">
      <div
        className="flex gap-6 text-gray-800 font-semibold"        
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelected(tab)}
            className={`px-3 py-1 rounded ${
              selected === tab
                ? "underline text-blue-500 "
                : "text-gray-500 hover:text-blue-300"
            }`}
          >
            {tab}
          </button>
        ))}
        <div className="flex gap-3 mb-6 ml-80 ">
          <button className="px-2 py-1  bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate("/received")}>
            Request Feedback
          </button>
          <button className="px-2 py-1 bg-blue-500  text-white rounded hover:bg-blue-600"
          onClick={() => navigate("/give-feedback")}>
            Give Feedback
          </button>
        </div>
      </div>
      <hr className="text-gray-600"></hr>
      {/* Received */}
      {selected === "Received" && (
        <div className="flex flex-col items-center justify-center mt-28 gap-4">
          <img src="/received.jpg" alt="received" className="w-40 h-40 rounded-full object-cover shadow-md" />
          <p className="text-sm text-gray-500 text-center">Seeking Advice?</p>
          <p>Let's gather a new outlook from your coworkers.</p>
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            Request Feedback
          </button>
        </div>
      )}

      {/* Given */}
      {selected === "Given" && (
        <div className="flex flex-col items-center justify-center mt-28 gap-4">
          <img src="/received.jpg" alt="received" className="w-40 h-40 rounded-full object-cover shadow-md" />
          <p className="text-sm text-gray-500 text-center">Have Feedback?</p>
          <p>Share your thoughts, celebrate achievements, and collaborate on goals.</p>
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate("/give-feedback")}>
            Give Feedback
          </button>
        </div>
      )}

      {/* Pending Request */}
      {selected === "Pending Request" && (
        <div className="flex flex-col items-center justify-center mt-28 gap-4">
          <img src="/received.jpg" alt="received" className="w-40 h-40 rounded-full object-cover shadow-md" />
          <p className="text-sm text-gray-500 text-center">Have Feedback?</p>
          <p>Share your thoughts, celebrate achievements, and collaborate on goals.</p>
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            Request Feedback
          </button>
        </div>
      )}

      {/*Drafts*/}
      {selected === "Drafts" && (
        <div className="flex flex-col items-center justify-center mt-28 gap-4">
          <img src="/public/drafts.jpg" alt="received" className="w-40 h-40 rounded-full object-cover shadow-md" />
          <p className="text-sm text-gray-500 text-center">Draft Your Feedback
          </p>
          <p>Capture your thoughts on feedback and find it later.</p>
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate("/give-feedback")}>
            Give Feedback
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedBack;
