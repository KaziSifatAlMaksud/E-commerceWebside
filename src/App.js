import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductSceen from "./screens/ProductSceen";
import HomeScreen from "./screens/HomeScreen";
import products from "./products";

function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
      <Container>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductSceen />}  />
        </Routes>
      </Container>
      </main>
      <Footer />
    </Router>
  );
}
export default App;
