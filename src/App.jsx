import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogpage from "./pages/Catalogpage";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { DataProvider } from "./context/DataContext";

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
          </Routes>
          <Footer />
        </Router>
      </DataProvider>
    </div>
  );
};

export default App;
