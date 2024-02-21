import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Table from "./Components/Table/Table";

const App = () => {
  return (
    <div className="max-w-[1440px] my-0 mx-auto">
      <Navbar />
      <Table />
    </div>
  );
};

export default App;
