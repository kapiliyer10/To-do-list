import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <span className="font-bold text-2xl hover:text-slate-200 transition cursor-pointer">
            ✓ iTask
          </span>
        </div>
        <ul className="flex gap-8">
          <li className="cursor-pointer hover:text-slate-200 font-medium transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-slate-200 font-medium transition">
            Your Tasks
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
