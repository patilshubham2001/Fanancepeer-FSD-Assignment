import Home from "./components/Home";
// import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import UploadData from "./components/UploadData";
import DisplayData from "./components/DisplayData";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/upload" element={<UploadData />} />
          <Route exact path="/display" element={<DisplayData />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
