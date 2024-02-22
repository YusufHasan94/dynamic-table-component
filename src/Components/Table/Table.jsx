import React from "react";
import TableCard from "./TableCard";

const Table = ({ data, selectedCols }) => {
  return (
    <div className="my-14">
      <div className="">
        <div className="tableHeader hidden lg:flex text-xl font-semibold">
          {selectedCols?.map((col, index) => (
            <h1
              key={index}
              className={`${
                col === "Title" ? "flex-[2]" : "flex-1"
              } text-start border-b-2 border-gray-500 pb-5`}
            >
              {col}
            </h1>
          ))}
        </div>
        <div className="w-full tableBody">
          {data.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-around lg:justify-normal items-center border-b-2 border-gray-500 py-5"
            >
              <div className="tableHeader flex lg:hidden flex-col text-xl font-semibold">
                {selectedCols.map((col, index) => (
                  <h1
                    key={index}
                    className={`${
                      col === "Title" ? "flex-[2]" : "flex-1"
                    } text-start  pb-5`}
                  >
                    {col}
                  </h1>
                ))}
              </div>
              <div className="w-full flex flex-col lg:flex-row items-center">
                {selectedCols.map((colTitle, colIndex) => (
                  <div
                    key={colIndex}
                    className={`${
                      colTitle === "Title" ? "flex-[2]" : "flex-1"
                    }`}
                  >
                    {
                      <TableCard
                        key={colIndex}
                        item={row}
                        colTitle={colTitle}
                      />
                    }
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
