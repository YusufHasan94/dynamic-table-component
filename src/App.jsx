import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Table from "./Components/Table/Table";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="max-w-[1440px] my-0 mx-auto  px-16 py-7 min-h-screen bg-slate-100 rounded-lg">
      <Navbar />
      <Table data={data} />
    </div>
  );
};

export default App;
