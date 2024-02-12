import facebook from "../images/Facebook.png";
import insta from "../images/Insta.png";
import pinterest from "../images/Pintrest.png";
import twitter from "../images/Twiter.png";

import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-background-5 bg-no-repeat  bg-center w-full h-[300px]  flex justify-evenly  items-center rounded-xl mt-24 font-roboto">
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
      </div>
      <footer className="flex justify-evenly mt-24 ">
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
export default Footer;
