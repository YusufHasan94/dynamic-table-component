import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";
import NavItems from "./NavItems";

const Navbar = ({
  isOpen,
  handleToggle,
  tableCols,
  selectedCols,
  toggleCols,
}) => {
  return (
    <div className="w-full flex justify-between items-center mt-10">
      <div>
        <h1 className="text-3xl font-semibold">Table Title</h1>
      </div>
      <div className="relative">
        <button className="text-4xl" onClick={handleToggle}>
          {isOpen ? <IoMdCloseCircleOutline /> : <CiMenuBurger />}
        </button>
        {isOpen ? (
          <div className="absolute right-0 min-w-[260px]">
            <NavItems
              tableCols={tableCols}
              selectedCols={selectedCols}
              toggleCols={toggleCols}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
