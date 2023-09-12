import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-semibold">
          My App
        </a>
        <div className="space-x-8">
          <a href="/register" className="text-white">
            Register
          </a>
          <a href="/login" className="text-white">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
