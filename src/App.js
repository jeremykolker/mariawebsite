import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Services } from "./components/Pages/Services";
import { Contact } from "./components/Pages/Contact";


function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
  </>
  );
}

export default App;
