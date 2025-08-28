import React from "react";

function Header() {
  return (
    <div className="mt-8 sm:mt-12 flex flex-col gap-4 items-center justify-center text-white w-full px-2 sm:px-0">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-blue-200 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
        Your ideal job awaits,{" "}
        <span className="whitespace-nowrap">start the search</span>
      </h1>
      <p className="text-base sm:text-xl text-blue-100 text-center max-w-xl shadow-sm">
        Get the latest job openings that best suit you!
      </p>
    </div>
  );
}

export default Header;
