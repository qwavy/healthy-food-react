import { useEffect, useContext, useState } from "react";
import Header from "../templates/Header";

import star from "../images/image_4.png";
import grey_star from "../images/grey_star.png";

import { ProductContext } from "../components/context/ProductIdContext";

const ShopSingle = () => {
  const { id } = useContext(ProductContext);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/product${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-shop-single-background-header bg-no-repeat bg-center w-full flex justify-center items-center h-[450px]">
        <h1 className="text-dark-blue text-5xl font-roboto font-bold">
          Shop Single
        </h1>
      </div>
      <main>
        <div className="flex justify-center">
          {product.map((product) => (
            <div className="flex">
              <div>
                <img src={product.image} className="w-[600px]" />
              </div>
              <div className="flex flex-col content-center  self-center">
                <span className="text-5xl text-dark-blue font-roboto font-bold">
                  {product.name}
                </span>
                <div className="flex ">
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
                <div className="flex w-64 justify-between">
                  <span className="line-through font-bold text-light-black text-3xl">
                    ${product.old_price}.00
                  </span>
                  <span className="font-bold text-dark-blue text-3xl">
                    ${product.old_price}.20
                  </span>
                </div>
                <span>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </span>
                <div>
                  <span className="text-dark-blue font-roboto font-bold text-xl">Quantity :</span>
                  <div>
                    <span>1</span>
                  </div>
                  <button>
                    <span>Add To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default ShopSingle;
