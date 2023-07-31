import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import DashBoard from "./pages/DashBoard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import POS from "./pages/POS";
import FetchedData from "./DataBase/FetchedData";
import { DataContext } from "./DataBase/DataContext";


function App() {
  return (
    <>
      <Router>
        <DataContext.Provider value={FetchedData()}>
          <Routes>
            {/* <Route path="/" element={<LogIn />} /> */}
            <Route path="/" element={<DashBoard />} />
            <Route path="/product" element={<Products />} />
            <Route path="/catagories" element={<Categories />} />
            <Route path="/users" element={<Users />} />
            <Route path="/pos" element={<POS />} />
          </Routes>
        </DataContext.Provider>
      </Router>
    </>
  );
}

export default App;
