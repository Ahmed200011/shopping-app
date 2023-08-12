import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./Componants/pages/Home";
import Store from "./Componants/pages/Store";
import About from "./Componants/pages/About";
import NavePar from "./Componants/navepar/NavePar";
import ShoppContexProvider from "./context/ShoppContex";
const App = () => {
  return (
    <ShoppContexProvider>
      <NavePar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppContexProvider>
  );
};

export default App;
