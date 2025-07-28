import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./screens/HomePage/HomePage";
import { AdminHomePageEditor } from "./screens/HomePage/sections/AdminHomepageEditor/AdminHomepageEditor";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-homepage" element={<AdminHomePageEditor />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
