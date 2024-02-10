import React, { useEffect, useState, useContext } from "react";
import Header from "../templates/Header";

import star from "../images/image_4.png";
import grey_star from "../images/grey_star.png";
import Footer from "../templates/Footer";


import { Link } from "react-router-dom";
import { ProductContext } from "../components/context/ProductIdContext"

const Shop = () => {
  const [products, setProducts] = useState([]);

  const { changeId } = useContext(ProductContext);


  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => console.log(e));


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
              <Link to={`/Shop/${product.id}`} onClick={() => changeId(product.id)}>
                <div className="mt-12 p-8">
                  <div className="bg-dark-blue rounded-xl p-2  w-3/12 text-center">
                    <span className="text-white font-roboto">
                      {product.category}
                    </span>
                  </div>
                  <img src={product.image} className="h-5/6" />
                  <span className="font-roboto text-dark-blue font-bold text-xl">
                    {product.name}
                  </span>
                  <div className="flex justify-between">
                    <div className="p-4">
                      <span className="line-through font-bold text-dark-blue mr-4">
                        ${product.old_price}.00
                      </span>
                      <span className="font-bold text-dark-blue">
                        ${product.price}.00
                      </span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <div key={index}>
                          {index < product.rating ? (
                            <img src={star} />
                          ) : (
                            <img src={grey_star} className="mt-[2px]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Shop;
