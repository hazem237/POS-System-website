import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import DashBoard from "./pages/DashBoard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import POS from "./pages/POS";
import FetchedData from "./DataBase/FetchedData";
import { DataContex } from "./DataBase/DataContex";

function App() {
  /* Making The Data a global for all pages Using LS*/

  // localStorage.setItem("categories", JSON.stringify(categories));
  // localStorage.setItem("users", JSON.stringify(users));
  // localStorage.setItem("products", JSON.stringify(products));

  return (
    <>
      <Router>
        <DataContex.Provider value={FetchedData()}>
          <Routes>
            s
            <Route path="/" element={<LogIn />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/product" element={<Products />} />
            <Route path="/catagories" element={<Categories />} />
            <Route path="/users" element={<Users />} />
            <Route path="/pos" element={<POS />} />
          </Routes>
        </DataContex.Provider>
      </Router>
    </>
  );
}

export default App;
