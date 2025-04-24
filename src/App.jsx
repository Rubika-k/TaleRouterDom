import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;