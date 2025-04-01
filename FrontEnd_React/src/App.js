
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemsList from "./pages/MasterItems/ItemsList";
import AddEditItems from "./pages/MasterItems/AddEditItems";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemsList />} />
          <Route path="/create" element={<AddEditItems />} />
          <Route path="/edit/:id" element={<AddEditItems />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
