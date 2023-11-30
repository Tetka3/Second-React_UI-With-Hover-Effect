import Sidebar from "./components/Sidebar"; 
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Performance from "./pages/Performance";
import Setting from "./pages/Setting";
import Support from "./pages/Support";
import Home from "./pages/Home";
import "./components/Sidebar.css";
import "./components/Navbar.css";
import "./pages/Home.css";
import "./App.css";

function App() {
  return (
    
    <div className="App">
      <Router>
          <Navbar />
          <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
