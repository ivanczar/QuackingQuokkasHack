import "./App.css";
import ScanScreen from "./pages/ScanScreen";
import Navbar from "./components/Navbar";
import RegisterScreen from "./pages/RegisterScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/scan" element={<ScanScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
