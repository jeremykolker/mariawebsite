import { Routes, Route } from "react-router-dom"
import Home from "./components/Home.js"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="services" element={ <Services/> } />
      </Routes>
    </div>
  )
}

export default App