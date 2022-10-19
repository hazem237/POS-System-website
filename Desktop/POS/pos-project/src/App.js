import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <>
      <Router>
        {/* <LogIn /> */}
        {/* <DashBoard /> */}
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
