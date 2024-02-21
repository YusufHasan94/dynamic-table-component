import React from "react";

const NavItems = ({ tableCols, selectedCols, toggleCols }) => {
  return (
    <div>
      <div className="flex flex-col bg-slate-300 px-5 py-2 rounded-lg">
        <h1 className="text-xl font-semibold text-center mb-5">
          Add or Remove columns
        </h1>
        {tableCols.map((col, index) => (
          <div key={index} className="flex gap-2 text-lg font-semibold">
            <input
              type="checkbox"
              name="navItem"
              id=""
              checked={selectedCols.includes(col.title)}
              onChange={() => toggleCols(col.title)}
            />
            <h1>{col.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavItems;
