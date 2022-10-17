import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import NavBar from "./components/NavBar/NavBar"
function App() {
 

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
