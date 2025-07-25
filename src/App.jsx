import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogpage from "./pages/Catalogpage";
import Productpage1 from "./pages/Productpage1";
import Home from "./pages/Home";
import Productpage2 from "./pages/Productpage2";
import Productpage3 from "./pages/Productpage3";
import Productpage4 from "./pages/Productpage4";
import Checkoutpage from "./pages/Checkoutpage";
import Productpage5 from "./pages/Productpage5";
import Productpage6 from "./pages/Productpage6";
import Shoppingcartpage from "./pages/Shoppingcartpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Catalogpage" element={<Catalogpage />} />
          <Route path="/Productpage1" element={<Productpage1 />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Productpage2" element={<Productpage2 />} />
          <Route path="/Productpage3" element={<Productpage3 />} />
          <Route path="/Productpage4" element={<Productpage4 />} />
          <Route path="/Checkoutpage" element={<Checkoutpage />} />
          <Route path="/Productpage5" element={<Productpage5 />} />
          <Route path="/Productpage6" element={<Productpage6 />} />
          <Route path="/Shoppingcartpage" element={<Shoppingcartpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
