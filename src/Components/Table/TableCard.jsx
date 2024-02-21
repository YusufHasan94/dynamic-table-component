import React from "react";
import { FiEdit } from "react-icons/fi";

const TableCard = ({ item, colTitle }) => {
  console.log(item);
  return (
    <div className="flex text-start items-center my-2 gap-4 text-lg font-">
      {colTitle === "Title" && <h1>{item.title}</h1>}
      {colTitle === "Category" && <h1>{item.category}</h1>}
      {colTitle === "Price" && <h1>{item.price}</h1>}
      {colTitle === "Date" && <h1>{item.date}</h1>}
      {colTitle === "Author" && <h1>{item.author}</h1>}
      {colTitle === "Status" && (
        <select
          name="status"
          id=""
          className={`px-4 py-2 rounded-lg border-2 ${
            item.status[0] === "publish"
              ? "bg-green-300 border-green-700"
              : "bg-gray-300 border-gray-600"
          }`}
        >
          {item.status.map((i, index) => (
            <option value={i} key={index}>
              {i}
            </option>
          ))}
        </select>
      )}
      {colTitle === "Action" && (
        <button className="bg-blue-950 text-white text-lg px-5 py-2 rounded-lg">
          <FiEdit />
        </button>
      )}
    </div>
  );
};

export default TableCard;
