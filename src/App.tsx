import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";
import UsePage from "./pages/UsePage";
import Communities from "./pages/Communities";
import Places from "./pages/Places";
import WhatIsWibhoo from "./pages/WhatIsWibhoo";
import OurApproach from "./pages/OurApproach";
import Service from "./pages/fourpillar/Service";
import Products from "./pages/fourpillar/Products";
import Terms from "./pages/Support/Terms";
import Shipping from "./pages/Support/Shipping";
import HowWeOnBoard from "./pages/HowWeOnBoard";
import Privacy from "./pages/Support/Privacy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductPage />} />
        <Route path="/use/:category" element={<UsePage />} />
        <Route path="/service/:category" element={<UsePage />} />
        <Route path="communities" element={<Communities />} />
        <Route path="places-spaces" element={<Places />} />
        <Route path="what-is-wibhoo" element={<WhatIsWibhoo />} />
        <Route path="our-approach" element={<OurApproach />} />
        <Route path="service" element={<Service />} />
        <Route path="Product" element={<Products />} />
        <Route path="/Product/:category" element={<ProductPage />} />
        <Route path="terms" element={<Terms />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="how-we-onboard" element={<HowWeOnBoard />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
