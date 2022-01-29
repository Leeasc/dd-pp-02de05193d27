import React from "react";
import Nav from "./components/Nav";
import useCounter from "./hooks/useCounter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSearch from "./pages/MainSearch";
import Basket from "./pages/Basket";

const App: React.FC = () => {
  const { items } = useCounter();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<MainSearch items={items} />} />
          <Route path="/basket" element={<Basket items={items} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
