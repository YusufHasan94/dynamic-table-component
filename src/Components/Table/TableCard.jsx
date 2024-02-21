import React from "react";

const TableCard = ({ item }) => {
  return (
    <div className="flex text-start my-2">
      <h1 className="flex-[2]">{item.title}</h1>
      <h1 className="flex-1">{item.category}</h1>
      <h1 className="flex-1">{item.price}</h1>
      <h1 className="flex-1">{item.date}</h1>
      <h1 className="flex-1">{item.author}</h1>
      <h1 className="flex-1">{item.status[0]}</h1>
      <button className="bg-blue-950 text-white text-lg flex-1">Edit</button>
    </div>
  );
};

export default TableCard;
