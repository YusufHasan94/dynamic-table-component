import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Table from "./Components/Table/Table";

const App = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  //table columns
  const tableCols = [
    { title: "Title", serial: 1 },
    { title: "Category", serial: 2 },
    { title: "Price", serial: 3 },
    { title: "Date", serial: 4 },
    { title: "Author", serial: 5 },
    { title: "Status", serial: 6 },
    { title: "Action", serial: 7 },
  ];

  //fetching data form locally store json file
  useEffect(() => {
    try {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //handle toggle dropdown of navigation bar
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  //handle initial columns
  const initialCols = tableCols.map((col) => col.title);
  const [selectedCols, setSelectedCols] = useState(initialCols);

  //handle toggle columns
  const toggleCols = (colTitle) => {
    if (selectedCols.includes(colTitle)) {
      const filterCols = selectedCols.filter((col) => col != colTitle);
      setSelectedCols(filterCols);
    } else {
      const restCols = [...selectedCols, colTitle];
      const sortedCols = restCols.sort((a, b) => {
        const A = tableCols.find((col) => col.title === a).serial;
        const B = tableCols.find((col) => col.title === b).serial;
        return A - B;
      });
      setSelectedCols(sortedCols);
    }
  };

  return (
    <div className="max-w-[1440px] my-0 mx-auto  px-16 py-7 min-h-screen bg-slate-100 rounded-lg">
      <Navbar
        isOpen={isOpen}
        handleToggle={handleToggle}
        tableCols={tableCols}
        selectedCols={selectedCols}
        toggleCols={toggleCols}
      />
      <Table data={data} selectedCols={selectedCols} />
    </div>
  );
};

export default App;
