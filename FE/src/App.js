import Register from "./components/Register";
import Login from "./components/Login";
import AadhaarCard from "./components/AadhaarCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aadhaar-card" element={<AadhaarCard />} />
      </Routes>
    </Router>
  );
}

export default App;
