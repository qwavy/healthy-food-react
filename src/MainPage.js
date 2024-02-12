import { useEffect, useState } from "react";

import logo from "./images/logo.png";
import search_icon from "./images/search_icon.png";
import cart_icon from "./images/cart_icon.png";
import image_1 from "./images/image_1.png";
import image_2 from "./images/image_2.png";
import image_3 from "./images/image_3.jpg";
import image_4 from "./images/image_4.png";
import image_5 from "./images/image_5.jpg";
import image_6 from "./images/image_6.jpg";
import image_7 from "./images/image_7.jpg";
import image_8 from "./images/image_8.jpg";
import image_9 from "./images/image_9.png";
import image_10 from "./images/image_10.png";
import icon_2 from "./images/icon_2.png";
import icon_1 from "./images/icon_1.png";
import icon_3 from "./images/icon_3.png";

import facebook from "./images/Facebook.png";
import insta from "./images/Insta.png";
import pinterest from "./images/Pintrest.png";
import twitter from "./images/Twiter.png";

import product_image_1 from "./images/products/product_image_1.png";
import product_image_2 from "./images/products/product_image_2.png";
import product_image_3 from "./images/products/product_image_3.png";
import product_image_4 from "./images/products/product_image_4.png";
import product_image_5 from "./images/products/product_image_5.png";
import product_image_6 from "./images/products/product_image_6.png";
import product_image_7 from "./images/products/product_image_7.png";
import product_image_8 from "./images/products/product_image_8.png";
import Header from "./templates/Header";

const MainPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Calabrese Broccoli",
      image: product_image_1,
      category: "Vegetable",
      price: 13,
      old_price: 20,
    },
    {
      id: 2,
      name: "Fresh Bananas",
      image: product_image_2,
      category: "Fresh",
      price: 14,
      old_price: 20,
    },
    {
      id: 3,
      name: "Whtie Nuts",
      image: product_image_3,
      category: "Millets",
      price: 15,
      old_price: 20,
    },
    {
      id: 4,
      name: "Red Tomamto",
      image: product_image_4,
      category: "Vegetable",
      price: 17,
      old_price: 20,
    },
    {
      id: 5,
      name: "Mung Bean",
      image: product_image_5,
      category: "Health",
      price: 11,
      old_price: 20,
    },
    {
      id: 6,
      name: "Brown Hazelnut",
      image: product_image_6,
      category: "Nuts",
      price: 12,
      old_price: 20,
    },
    {
      id: 7,
      name: "Eggs",
      image: product_image_7,
      category: "Fresh",
      price: 17,
      old_price: 20,
    },
    {
      id: 8,
      name: "Zelco Suji Elaichi Rusk",
      image: product_image_8,
      category: "Fresh",
      price: 15,
      old_price: 20,
    },
  ]);

  const freshProducts = products.slice(0, 4);

  return (
    <div className="m-auto">
      <Header />
      <main className=" m-auto">
        <div class="flex justify-center bg-background-1 bg-center flex-col lg:flex-row">
          <div class="flex justify-center flex-col items-center self-center w-full">
            <span class="text-light-green font-yellowtail text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              100% Natural Food
            </span>
            <h1 class="font-roboto text-dark-blue text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-3">
              Choose the best healthier way of life
            </h1>
            <button class="bg-light-yellow p-4 md:p-6 rounded-lg font-roboto text-dark-blue mt-5 w-48 sm:w-64 font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Explore Now
            </button>
          </div>

          <img src={image_1} class="hidden lg:block relative md:w-[600px]" />
        </div>

        <div className="flex justify-between mt-48 flex-col lg:flex-row lg:justify-evenly h-[800px] ">
          <div className="bg-background-2  bg-no-repeat bg-center h-[365px] rounded-xl flex justify-center flex-col lg:min-w-[600px] ">
            <span className="text-white font-yellowtail ml-12 text-3xl ">
              Natural!!
            </span>
            <span className="font-roboto text-white ml-12 text-4xl w-48 font-bold">
              Get Garden Fresh Fruits
            </span>
          </div>
          <div className="bg-background-3 bg-no-repeat bg-center h-[365px] rounded-xl flex justify-center flex-col">
            <span className="text-light-green font-yellowtail ml-12 text-3xl">
              Offer!!
            </span>
            <span className="text-dark-blue font-roboto text-4xl w-96 ml-12 font-bold">
              Get 10% off on Vegetables
            </span>
          </div>
        </div>


        {/* <div className="flex justify-center ">
          <img src={image_2} />

          <div className="w-[700px] flex justify-center flex-col p-8">
            <span className="font-yellowtail text-light-green text-3xl">
              About Us
            </span>
            <h1 className="text-6xl font-roboto font-bold text-dark-blue">
              We Believe in Working Accredited Farmers
            </h1>
            <span className="text-light-black text-xl">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </span>
            <div className="flex justify-around mt-8">
              <img src={icon_1} />
              <div className="flex flex-col ">
                <span className="font-roboto text-dark-blue font-bold text-3xl">
                  Organic Foods Only
                </span>
                <span className="font-roboto text-s text-light-black">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </span>
              </div>
            </div>
            <div className="flex justify-around mt-8">
              <img src={icon_2} />
              <div className="flex flex-col">
                <span className="font-roboto text-dark-blue font-bold text-3xl">
                  Quality Standards
                </span>
                <span className="font-roboto text-s text-light-black">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </span>
              </div>
            </div>
            <button className="bg-dark-blue rounded-xl w-48 mt-12 h-12">
              <span className="text-white font-bold font-roboto">Shop now</span>
            </button>
          </div>
        </div>
        <div className="text-center flex justify-center flex-col">
          <span className="text-light-green font-yellowtail text-3xl ">
            Categories
          </span>
          <span className="font-roboto text-5xl text-dark-blue font-bold">
            Our Products
          </span>
        </div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-24">
          <button className="bg-dark-blue p-6 rounded-xl">
            <span className="font-roboto text-xl text-white">Load More</span>
          </button>
        </div>
        <div className=" mt-24 bg-background-4 bg-no-repeat w-full bg-center h-[100vh] flex flex-col content-center justify-center">
          <div className="flex justify-center text-center content-center">
            <div className="w-full">
              <p className="font-yellowtail text-light-green text-3xl">
                Testimonial
              </p>
              <h1 className="font-roboto text-5xl text-dark-blue font-bold">
                What Our Customer Saying?
              </h1>
              <div className="flex justify-center">
                <img src={image_3} className="rounded-full w-32 mt-8" />
              </div>
              <div className="flex justify-center mt-4">
                <img src={image_4} />
                <img src={image_4} />
                <img src={image_4} />
                <img src={image_4} />
                <img src={image_4} />
              </div>
              <div className="flex justify-center flex-col mt-12 ">
                <span className="text-light-black text-xl ">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </span>
                <span className="text-3xl text-dark-blue font-roboto font-bold mt-4">
                  Sara Taylor
                </span>
                <span className="text-xl text-light-black mt-2">Consumer</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-44">
            <div className="flex justify-evenly w-7/12">
              <div className="rounded-full border-solid border-light-green w-52 h-52 flex justify-center flex-col text-center   border-4">
                <span className="text-3xl text-dark-blue font-bold">100%</span>
                <span className="text-xl text-dark-blue font-bold font-roboto">
                  Organic
                </span>
              </div>
              <div className="rounded-full border-solid border-light-green w-52 h-52 flex justify-center flex-col text-center  border-4">
                <span className="text-3xl text-dark-blue font-bold">285</span>
                <span className="text-xl text-dark-blue font-bold font-roboto">
                  Active Product
                </span>
              </div>
              <div className="rounded-full border-solid border-light-green w-52 h-52 flex justify-center flex-col  text-center  border-4">
                <span className="text-3xl text-dark-blue font-bold">350+</span>
                <span className="text-xl text-dark-blue font-bold font-roboto">
                  Organic Orchads
                </span>
              </div>
              <div className="rounded-full border-solid border-light-green w-52 h-52 flex justify-center flex-col text-center   border-4">
                <span className="text-3xl text-dark-blue font-bold">25+</span>
                <span className="text-xl text-dark-blue font-bold font-roboto">
                  Years of Farming
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark-blue w-full flex justify-center items-center h-[900px] pt-24">
          <div className="">
            <div className="flex justify-between w-[1500px]">
              <div className="flex flex-col">
                <span className="font-yellowtail text-light-green text-3xl ">
                  Offer
                </span>
                <span className="font-roboto font-bold text-5xl text-white">
                  We Offer Organic For You
                </span>
              </div>
              <button className="bg-light-yellow rounded-xl p-6">
                <span className="text-dark-blue font-bold">
                  View All Product
                </span>
              </button>
            </div>
            <div>
              <div className="flex justify-evenly ">
                {freshProducts.map((product) => (
                  <div className="bg-white rounded-xl mt-8 p-4">
                    <img src={product.image} className="h-5/6 rounded-xl" />
                    <span className="font-roboto text-dark-blue font-bold text-xl">
                      {product.name}
                    </span>
                    <div className="flex justify-between">
                      <span className="line-through font-bold text-dark-blue">
                        ${product.old_price}.00
                      </span>
                      <span className="font-bold text-dark-blue">
                        ${product.price}.00
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly">
          <img src={image_5} />
          <div className="flex flex-col justify-center">
            <span className="font-yellowtail text-light-green text-xl">
              Eco Friendly
            </span>
            <span className="text-5xl font-roboto font-bold text-dark-blue">
              Econis is a Friendly Organic Store
            </span>
            <div className="flex flex-col">
              <div className="flex flex-col p-8">
                <span className="text-dark-blue text-3xl font-bold">
                  Start with Our Company First
                </span>
                <span className="text-xl w-3/4 font-roboto text-light-black p-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </span>
              </div>
              <div className="flex flex-col p-8">
                <span className="text-dark-blue text-3xl font-bold">
                  Learn How to Grow Yourself
                </span>
                <span className="text-xl w-3/4 font-roboto text-light-black p-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </span>
              </div>
              <div className="flex flex-col p-8">
                <span className="text-dark-blue text-3xl font-bold">
                  Farming Strategies of Today
                </span>
                <span className="text-xl w-3/4 font-roboto text-light-black p-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly  mt-24">
          <div className="relative flex justify-center ">
            <div className="flex  items-center ">
              <button className="absolute top-2/4 left-0 right-0 m-auto bg-white p-4 rounded-xl text-center w-5/12">
                <span className="font-roboto font-bold text-dark-blue">
                  Organic Juice
                </span>
              </button>
            </div>
            <img src={image_6} className=" rounded-xl" />
          </div>{" "}
          <div className="relative flex justify-center ">
            <div className="flex  items-center ">
              <button className="absolute top-2/4 left-0 right-0 m-auto bg-white p-4 rounded-xl text-center w-5/12">
                <span className="font-roboto font-bold text-dark-blue">
                  Organic Food
                </span>
              </button>
            </div>
            <img src={image_7} className=" rounded-xl" />
          </div>{" "}
          <div className="relative flex justify-center ">
            <div className="flex  items-center ">
              <button className="absolute top-2/4 left-0 right-0 m-auto bg-white p-4 rounded-xl text-center w-5/12">
                <span className="font-roboto font-bold text-dark-blue">
                  Nuts Cookis
                </span>
              </button>
            </div>
            <img src={image_8} className=" rounded-xl" />
          </div>
        </div>
        <div className="mt-48">
          <div className="flex justify-around">
            <div className="flex flex-col">
              <span className="font-yellowtail text-light-green text-3xl">
                News
              </span>
              <span className="font-roboto text-dark-blue text-5xl">
                Discover weekly content about organic food, & more
              </span>
            </div>
            <button className=" border-dark-blue border-2 rounded-xl p-4 bg-white w-48">
              <span className="text-dark-blue font-bold font-roboto">
                More News
              </span>
            </button>
          </div>
          <div className="flex justify-evenly mt-12">
            <div className="relative flex  justify-center content-center items-end">
              <img src={image_9} className="rounded-xl w-full" />
              <div className="w-5/6 bg-white absolute h-72 rounded-xl p-12">
                <div className="flex">
                  <img src={icon_3} className="mr-7 w-[25px] h-[30px]" />
                  <span className="font-roboto font-bold text-2xl text-dark-blue">
                    By Rachi Card
                  </span>
                </div>
                <div className="flex flex-col justify-evenly h-[200px]">
                  <span className="font-roboto font-bold text-2xl text-dark-blue">
                    The Benefits of Vitamin D & How to Get It
                  </span>
                  <span className="font-roboto text-light-black">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </span>
                  <button className="bg-light-yellow rounded-xl p-4 w-2/6">
                    <span className="text-dark-blue font-bold ">Read More</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex  justify-center content-center items-end">
              <img src={image_10} className="rounded-xl w-full" />
              <div className="w-5/6 bg-white absolute h-72 rounded-xl p-12">
                <div className="flex">
                  <img src={icon_3} className="mr-7 w-[25px] h-[30px]" />
                  <span className="font-roboto font-bold text-2xl text-dark-blue">
                    By Rachi Card
                  </span>
                </div>
                <div className="flex flex-col justify-evenly h-[200px]">
                  <span className="font-roboto font-bold text-2xl text-dark-blue">
                    Our Favourite Summertime Tommeto
                  </span>
                  <span className="font-roboto text-light-black">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </span>
                  <button className="bg-light-yellow rounded-xl p-4 w-2/6">
                    <span className="text-dark-blue font-bold ">Read More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background-5 bg-no-repeat  bg-center w-full h-[300px]  flex justify-evenly  items-center rounded-xl mt-24">
          <span className="text-white text-4xl font-roboto font-bold">
            Subscribe to our Newsletter
          </span>
          <div>
            <input
              className="rounded-xl p-4 placeholder:font-roboto font-bold"
              placeholder="Your Email Address"
            />
            <button className="bg-dark-blue rounded-xl p-4 ml-2">
              <span className="text-white font-roboto font-bold">
                Subscribe
              </span>
            </button>
          </div>
        </div> */}
      </main>
      <footer className="flex justify-evenly mt-24">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="font-roboto font-bold text-dark-blue text-3xl">
              Contact Us
            </span>
            <ul className="flex flex-col justify-evenly h-[300px] items-end">
              <li className="font-roboto font-bold text-xl text-dark-blue">
                Email
              </li>
              <li>needhellp@Organick.com</li>
              <li className="font-roboto font-bold text-xl text-dark-blue">
                Phone
              </li>
              <li>666 888 888</li>
              <li className="font-roboto font-bold text-xl text-dark-blue">
                Address
              </li>
              <li>88 road borklyn street, USA</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex items-center content-center">
            <img src={logo} className="w-10 m-3" />
            <span className="font-roboto font-bold text-dark-blue text-3xl">
              Organick
            </span>
          </div>
          <div className="flex justify-evenly">
            <img src={insta} />
            <img src={facebook} />
            <img src={twitter} />
            <img src={pinterest} />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="font-roboto font-bold text-dark-blue text-3xl">
              Utility Pages
            </span>
            <ul className="flex flex-col justify-evenly h-[300px] items-end">
              <li>Style Guide</li>
              <li>404 Not Found</li>
              <li>Password Protected</li>
              <li>Licences</li>
              <li>Changelog</li>
              <li>Changelog</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default MainPage;
