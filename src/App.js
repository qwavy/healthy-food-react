import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

import MainPage from "./MainPage";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import ShopSingle from "./pages/ShopSingle";
import { ProductProvider } from "./components/context/ProductIdContext";
import Services from "./pages/Services";
import Header from "./templates/Header";

const App = () => {
  return (
    <ProductProvider>
      <div className="m-auto">
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shop/:id" element={<ShopSingle />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </ProductProvider>
  );
};
export default App;
