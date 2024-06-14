import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
