import { ChangeEvent, useState } from "react";
import Input from "../../ui/input";
import Footer from "../../components/footer";

const Request = () => {
  const [selected, setSelected] = useState<"Apply" | "Pending" | "Closed">(
    "Apply"
  );
  const tabs: Array<"Apply" | "Pending" | "Closed"> = ["Apply", "Pending", "Closed"];
  const [dateRange, setDateRange] = useState<string>("");

  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <div className="flex border border-gray-300 rounded-lg overflow-hidden">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelected(tab)}
            className={`px-6 py-2 transition-all duration-300 ${
              selected === tab
                ? "bg-blue-600 text-white font-semibold"
                : "bg-white text-gray-700 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {selected !== "Apply" && (
        <div className="mt-8 pl-[35rem]">
          <Input
      type="date"
      id="dateRange"
      name="dateRange"
      value={dateRange}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setDateRange(e.target.value)}
      className="border border-gray-300 px-4 py-1 rounded-md"
    />
        </div>
      )}

      <div className="mt-16 text-center">
        <img src="/images.jpg" alt="empty" className="w-40 h-40 mx-auto" />
        <h6 className="font-semibold text-lg mt-4">It’s empty in here!</h6>
        <p className="text-sm text-gray-500 mt-1">
          No request types have been added yet.
        </p>
        <p className="text-sm text-gray-500">Please check back later!</p>
      </div>

      <Footer />
    </div>
  );
};

export default Request;
