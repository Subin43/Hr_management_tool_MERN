import { HeaderQuotes } from "../utils/headerquotes";

const Header = () => {
  const randomIndex = Math.floor(Math.random() * HeaderQuotes.length);
  const randomQuote = HeaderQuotes[randomIndex];
  const userName = "Christal";
  return (
    <div className="mt-16 p-4 ml-64">
      <div className="text-xl font-semibold p-2">
        <h2 className="">
          Good Morning
          <span className="text-gray-600"> {userName}</span>
        </h2>
      </div>
      <div className="text-md text-gray-500 mt-2 italic">
        <p>"{randomQuote.quotes}"</p>
        <p>{randomQuote.author}</p>
      </div>
    </div>
  );
};

export default Header;
