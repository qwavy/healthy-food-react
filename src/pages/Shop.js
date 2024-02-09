import { useEffect, useState } from "react";
import Header from "../templates/Header";

import star from "../images/image_4.png";
import Footer from "../templates/Footer";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://67970f78c9112ce9.mokky.dev/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-shop-background-header bg-no-repeat bg-center w-full flex justify-center items-center h-[450px]">
        <h1 className="text-dark-blue text-5xl font-roboto font-bold">Shop</h1>
      </div>
      <main>
        <div className="flex justify-center mt-8 ">
          <div className="grid grid-rows-2 grid-cols-4">
            {products.map((product) => (
              <div className="mt-12">
                <div className="bg-dark-blue rounded-xl p-2  w-3/12 text-center">
                  <span className="text-white font-roboto">
                    {product.category}
                  </span>
                </div>
                <img src={product.image} className="h-5/6" />
                <span className="font-roboto text-dark-blue font-bold text-xl">
                  {product.name}
                </span>
                <div className="flex justify-around">
                  <span className="line-through font-bold text-dark-blue">
                    ${product.old_price}.00
                  </span>
                  <span className="font-bold text-dark-blue">
                    ${product.price}.00
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <span key={index}>
                        {index < product.rating ? (
                          <img src={star} />
                        ) : (
                          <p>sa</p>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};
export default Shop;
