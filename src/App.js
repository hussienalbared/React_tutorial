import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const dataToPass = { message: "Hello from Home Page!",name:45 };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* Pass the variable (state) to the About page */}
          <li>
            <Link to="/about" state={dataToPass}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact name={'husein'} />} />
      </Routes>
    </Router>
  );
}

export default App;
