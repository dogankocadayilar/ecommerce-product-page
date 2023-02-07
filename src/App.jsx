import ProductCarousel from "./components/ProductCarousel";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductInfo from "./components/ProductInfo";
import { useState } from "react";

export const baseUrl =
  "https://raw.githubusercontent.com/dogankocadayilar/ecommerce-product-page/main/src/assets/images";

function App() {
  const [product, setProduct] = useState(null);
  return (
    <div className="app">
      <Navbar product={product} setProduct={setProduct} />
      <main>
        <ProductCarousel />
        <ProductInfo setProduct={setProduct} />
      </main>
    </div>
  );
}

export default App;
