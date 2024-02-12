import logo from "../images/logo.png";
import search_icon from "../images/search_icon.png";
import cart_icon from "../images/cart_icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [showCollapse, setShowCollapse] = useState(false);

  const openCollapse = () => {
    setShowCollapse(!showCollapse);
  };

  return (
      <header className=" py-4 px-4 sm:px-10 bg-white font-roboto min-h-[70px]">
        <div className="flex flex-wrap items-center justify-between gap-5 relative">
          <Link to="/Home" className="flex">
            <img src={logo} className="w-10 m-3" />
            <h1 className="self-center text-3xl text-dark-blue font-roboto font-bold">
              Organick
            </h1>
          </Link>
          <div className="flex lg:order-1 max-sm:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <button
              onClick={() => openCollapse()}
              className="lg:hidden ml-7"
            >
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <ul
            className={
              showCollapse
                ? "lg:!flex lg:space-x-5 max-lg:space-y-2  max-lg:py-4 max-lg:w-full block"
                : "lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full hidden"
            }
          >
            <li className="max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to=""
                className="lg:hover:text-[#007bff] text-dark-blue max-lg:text-white block font-semibold text-[15px]"
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="javascript:void(0)"
                className="lg:hover:text-[#007bff] text-dark-blue block font-semibold text-[15px]"
              >
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to=""
                className="lg:hover:text-[#007bff] text-dark-blue block font-semibold text-[15px]"
              >
                Pages
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to=""
                className="lg:hover:text-[#007bff] text-dark-blue block font-semibold text-[15px]"
              >
                Shop
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to=""
                className="lg:hover:text-[#007bff] text-dark-blue block font-semibold text-[15px]"
              >
                Projects
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to=""
                className="lg:hover:text-[#007bff] text-dark-blue block font-semibold text-[15px]"
              >
                News
              </Link>
            </li>
          </ul>
        </div>
      </header>
  );
};
export default Header;
