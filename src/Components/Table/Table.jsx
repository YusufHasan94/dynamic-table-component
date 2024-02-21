import React from "react";
import TableCard from "./TableCard";

const Table = ({ data }) => {
  return (
    <div className="my-14">
      <div className="flex justify-between text-xl font-semibold text-start">
        <h1 className="flex-[2]">Title</h1>
        <h1 className="flex-1">Categories</h1>
        <h1 className="flex-1">Price</h1>
        <h1 className="flex-1">Date</h1>
        <h1 className="flex-1">Author</h1>
        <h1 className="flex-1">Status</h1>
        <h1 className="flex-1">Action</h1>
      </div>
      <hr className="my-10 " />
      {data.map((item, index) => (
        <TableCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Table;
