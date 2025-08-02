import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogpage from "./pages/Catalogpage";
import Productpage1 from "./pages/Productpage1";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { DataProvider } from "./context/DataContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <DataProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Catalogpage" element={<Catalogpage />} />
            <Route path="/Productpage1" element={<Productpage1 />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </DataProvider>
    </div>
  );
};

export default App;
