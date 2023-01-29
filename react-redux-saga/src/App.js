import "./App.css";
import Home from "./components/Home";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sale" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
