import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/use" element={<Home />} />
        <Route path="/places" element={<Home />} />
        <Route path="/communities" element={<Home />} />
        <Route path="/our-story" element={<Home />} />
        {/* Add additional routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
