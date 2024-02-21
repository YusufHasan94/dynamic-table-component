import React from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center mt-10">
      <div>
        <h1 className="text-3xl font-semibold">Table Title</h1>
      </div>
      <div>
        <button className="text-4xl">
          <CiMenuBurger />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
