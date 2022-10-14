import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center text-white">
        <img className="w-32 cursor-pointer pt-2" src={logo} alt="logo" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["About", "Market", "Exchange", "Wallet"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <Link to="/Swap">
        <li className="bg-[#2952e3] font-mono font-bold text-white py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          DosaSwap
        </li>
        </Link>
        
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-yellow-500 md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul onClick={() => setToggleMenu(false)} 
            className="transition-all z-10 fixed top-16 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none 
        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            {["About", "Market", "Exchange", "Wallet"].map((item, index) => (
              <NavbarItem
                key={item + index}
                title={item}
                props="my-2 text-sm"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

const NavbarItem = ({ title, props }) => {
  return <li className={`mx-4 cursor-pointer text-xs text-white ${props}`}>{title}</li>;
};
export default Navbar;
