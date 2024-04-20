import React, { useState } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#121315] border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-[#8ebbff]">
            Comany Name
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-block text-gray-500 lg:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-[#fff] bg-[#8ebbff] rounded lg:bg-transparent lg:text-[#8ebbff] lg:p-0 dark:text-[#e3e6df]"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-[#e3e6df] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#8ebbff] lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#e3e6df] dark:hover:bg-gray-700 dark:hover:text-[#e3e6df] lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-[#e3e6df] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#8ebbff] lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#e3e6df] dark:hover:bg-gray-700 dark:hover:text-[#e3e6df] lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-[#e3e6df] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#8ebbff] lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#e3e6df] dark:hover:bg-gray-700 dark:hover:text-[#e3e6df] lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-[#e3e6df] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#8ebbff] lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#e3e6df] dark:hover:bg-gray-700 dark:hover:text-[#e3e6df] lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-[#e3e6df] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#8ebbff] lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#e3e6df] dark:hover:bg-gray-700 dark:hover:text-[#e3e6df] lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
