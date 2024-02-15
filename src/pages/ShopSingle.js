import { useEffect, useContext, useState } from "react";
import Header from "../templates/Header";
import { Link } from "react-router-dom";

import star from "../images/image_4.png";
import grey_star from "../images/grey_star.png";

import { ProductContext } from "../components/context/ProductIdContext";
import Footer from "../templates/Footer";

const ShopSingle = () => {
  const { id } = useContext(ProductContext);
  const [product, setProduct] = useState([]);

  const { changeId } = useContext(ProductContext);


  const [productsRelated, setProductsRelated] = useState([]);
  useEffect(() => {
    // fetch(`http://localhost:5000/product${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setProduct(data));

    // fetch("http://localhost:5000/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProductsRelated(data.slice(0, 4));
    //   });
    fetch(`https://localhost:7173/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct([data]));
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
                <span className="w-[650px] mt-12 mb-12">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </span>
                <div className="flex w-2/3 justify-between content-center items-center">
                  <span className="text-dark-blue font-roboto font-bold text-xl">
                    Quantity
                  </span>
                  <div className="p-4 w-24 border-dark-blue border-2 rounded-xl flex justify-center">
                    <span className="text-dark-blue font-roboto font-bold ">
                      1
                    </span>
                  </div>
                  <button className="bg-dark-blue p-6 rounded-xl">
                    <span className="text-white font-roboto font-bold">
                      Add To Cart
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="font-roboto font-bold text-5xl flex justify-center mt-12 text-dark-blue">
            Related Products
          </h1>
          <div className="flex justify-center mt-8 ">
            <div className="grid grid-rows-1 grid-cols-4">
              {productsRelated.map((product) => (
                <Link
                  to={`/Shop/${product.id}`}
                  onClick={() => changeId(product.id)}
                  className="mt-12 p-8"
                >
                  {/* <div className=""> */}
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
                  {/* </div> */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};
export default ShopSingle;
