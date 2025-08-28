import React from "react";

function Navbar() {
  return (
    <nav className="h-16 sm:h-20 flex items-center w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 shadow-lg px-4 sm:px-10">
      <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
        <span className="bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent">
          Job
        </span>
        <span className="text-yellow-300"> Hub.</span>
      </div>
    </nav>
  );
}

export default Navbar;
