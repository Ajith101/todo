import React from "react";

const Header = () => {
  return (
    <div className="bg-orange-500 flex justify-between items-center text-white px-3 py-4 w-full md:px-20 md:py-9">
      <div className="">
        <h1 className="text-2xl font-semibold">Official Notes App</h1>
      </div>
      <div className="">
        <ul>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
