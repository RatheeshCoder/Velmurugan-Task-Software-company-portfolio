import React from "react";

const Footer = () => {
  return (
    <footer className=" xl:mt-1 mx-auto w-full relative text-center bg-[#8ebbff] text-[#e3e6df]">
      <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 className="text-3xl font-bold leading-snug xl:text-4xl">
          Ready to get your productivity back?
          <br />
          Start your free trial today.
        </h2>
        <a
          className="inline-block px-12 py-5 mt-8 text-lg font-medium leading-tight bg-[#e3e6df] text-[#8ebbff] border border-transparent rounded-full shadow-xl xl:mt-12 hover:bg-[#30353b] hover:text-[#e3e6df] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
          href="#"
        >
          Get started
        </a>
        <div className="mt-14 xl:mt-20">
          <nav className="flex flex-wrap justify-center text-lg font-medium">
            <div className="px-5 py-2">
              <a href="#">Contact</a>
            </div>
            <div className="px-5 py-2">
              <a href="#">Pricing</a>
            </div>
            <div className="px-5 py-2">
              <a href="#">Privacy</a>
            </div>
            <div className="px-5 py-2">
              <a href="#">Terms</a>
            </div>
            <div className="px-5 py-2">
              <a href="#">Twitter</a>
            </div>
          </nav>
          <p className="text-base mt-7">© 2023 XYZ, LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
