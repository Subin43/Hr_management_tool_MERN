import SimpleCard from "../ui/card";

const Content = () => {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 l gap-6 px-8 py-4 ml-72 bg-white min-h-screen">
    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-8 py-4  top-48 left-72 bg-white min-h-screen"> */}
      <SimpleCard
        title="IT Declaration"
        img="/it-declaration.svg"
        desc="Uh oh! You have missed submitting your IT declartion. 
              Please submit it once the window open"
      />
      <SimpleCard
        title="Quick Access"
        desc="You have 3 tasks pending for this week."
      />
      <SimpleCard
        title="Track"
        img="/work-track.svg"
        desc="All good! You've nothing new to track."
      />
      <SimpleCard
        title="POI"
        img="/it-declaration.svg"
        desc="Hurray! POI submission is open until 21 Jan 2025 for FY 2024-25"
        buttonText="Declare"
      />
    </div>
  );
};

export default Content;
