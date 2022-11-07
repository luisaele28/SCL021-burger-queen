import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home.jsx";
import Login from "./routes/login.jsx";
import Menu from "./routes/menu.jsx";
import Chef from "./routes/chef.jsx";
import Delivery from "./routes/delivery.jsx";
//import "./App.css";
import { SelectionProvider } from "./Commands/commands";

const App = () => {
  return (
    <SelectionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="menu" element={<Menu />} />
          <Route path="chef" element={<Chef />} />
          <Route path="delivery" element={<Delivery />} />
        </Routes>
      </Router>
    </SelectionProvider>
  );
};

export default App;