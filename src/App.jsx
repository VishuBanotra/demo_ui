import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Scroll.js";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
