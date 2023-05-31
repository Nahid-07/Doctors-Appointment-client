import React, { useState } from "react";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const animationClass = "transition ease-in-out hover:scale-110 hover:text-white duration-150";
  return (
    <>
      {/* desktop navbar */}
      <div className="lg:flex justify-between p-6 h-14 shadow-md items-center hidden bg-[#D4D9E3] sticky top-0 z-50">
        <header>
          <h1 className="text-2xl text-[#3A4256] font-bold">Doctors Portal</h1>
        </header>
        <nav>
          <div>
            <ul className="flex space-x-4 text-lg text-[#3A4256]">
              <Link href="/">
                <li
                  className={`${animationClass} hover:bg-[#3A4256] px-3 rounded`}
                >
                  Home
                </li>
              </Link>
              <Link href="/dashbord">
                <li
                  className={`${animationClass} hover:bg-[#3A4256] px-3 rounded`}
                >
                  Appointment
                </li>
              </Link>
              <Link href="/blog">
                <li
                  className={`${animationClass} hover:bg-[#3A4256] px-3 rounded`}
                >
                  Reviews
                </li>
              </Link>
              <Link href="/SignIn">
                <li
                  className={`${animationClass} hover:bg-[#3A4256] px-3 rounded`}
                >
                  Contact Us
                </li>
              </Link>
              <Link href="/">
                <li
                  className={`${animationClass} hover:bg-[#3A4256] px-3 rounded`}
                >
                  About
                </li>
              </Link>
              <Link href="/">
                <li
                  className={`${animationClass} hover:bg-[#3A4256] px-3 rounded`}
                >
                  Log In
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>

      {/* navbar for mobile device */}

      <div className="p-6 flex lg:hidden justify-between h-10 shadow-md items-center bg-[#D4D9E3]">
        <header className="text-[#3A4256] font-bold">Doctors portal</header>
        {/* tap and show menu icon */}
        <div onClick={() => setOpen(!open)}>
          <RxHamburgerMenu className="text-[#3A4256] font-extrabold" />
        </div>
      </div>

      <nav className={`${open ? "block" : "hidden"} bg-indigo-950 `}>
        <ul className="p-6 space-y-4 text-[#3A4256] bg-[#D4D9E3]">
          <Link href="/">
            <li
              className={`${animationClass} hover:bg-[#3A4256] px-3 rounded`}
            >
              Home
            </li>
          </Link>
          <Link href="/dashbord">
            <li
              className={`${animationClass} hover:bg-[#3A4256] px-3 rounded`}
            >
              Appointment
            </li>
          </Link>
          <Link href="/blog">
            <li
              className={`${animationClass} hover:bg-[#3A4256] px-3 rounded`}
            >
              Reviews
            </li>
          </Link>
          <Link href="/SignIn">
            <li
              className={`${animationClass} hover:bg-[#3A4256] px-3 rounded`}
            >
              Contact Us
            </li>
          </Link>
          <Link href="/">
            <li
              className={`${animationClass} hover:bg-[#3A4256] px-3 rounded`}
            >
              About
            </li>
          </Link>
          <Link href="/">
            <li
              className={`${animationClass} hover:bg-[#3A4256] px-3 rounded`}
            >
              Log In
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
