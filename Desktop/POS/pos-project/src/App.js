import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <Router>
        <LogIn />
        <Routes>
          <Route path='/'  />
        </Routes>
      </Router>
    </>
  );
}

export default App;
