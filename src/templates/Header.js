import logo from "../images/logo.png";
import search_icon from "../images/search_icon.png";
import cart_icon from "../images/cart_icon.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="flex justify-around items-center w-full">
        <div className="flex justify-around w-7/12">
            <Link to="/Home" className="flex">
              <img src={logo} className="w-10 m-3" />
              <h1 className="self-center text-3xl text-dark-blue font-roboto font-bold">
                Organick
              </h1>
            </Link>
          <div className="flex w-[700px] justify-around self-center font-roboto font-bold">
            <a className="inline-block">Home </a>
            <a>About </a>
            <a>Pages </a>
            <Link to="/Shop">Shop </Link>
            <a>Projects </a>
            <a>News</a>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={search_icon} />
          </div>
          <div className="flex">
            <img src={cart_icon} />
            <p className="self-center m-3">Cart</p>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
