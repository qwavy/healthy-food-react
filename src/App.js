import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

import MainPage from "./MainPage";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import ShopSingle from "./pages/ShopSingle";
import { ProductProvider } from "./components/context/ProductIdContext";
import Services from "./pages/Services";

const App = () => {
  return (
    <ProductProvider>
      <div className="w-[1920px] m-auto">
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shop/:id" element={<ShopSingle />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
        {/* <Shop/> */}
        {/* <MainPage/> */}
        {/* <ShopSingle/> */}
      </div>
    </ProductProvider>
  );
};
export default App;
