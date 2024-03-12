import React from "react";
import Homepage from "./Components/HomePage/Homepage";
import Authentication from "./Components/Authentication/Authentication";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={true ? <Homepage /> : <Authentication />} />
    </Routes>
  );
};

export default App;
