import React, { useState } from "react";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const animationClass = "transition ease-in-out hover:scale-110 duration-150";
  return (
    <>
      {/* desktop navbar */}
      <div className="lg:flex justify-between p-6 h-14 shadow-md items-center hidden bg-black sticky top-0 z-50">
        <header>
          <h1 className="text-2xl text-white font-bold">Doctors Portal</h1>
        </header>
        <nav>
          <div>
            <ul className="flex space-x-4 text-lg text-white">
              <Link href="/">
                <li
                  className={`${animationClass} hover:bg-indigo-500 px-3 rounded`}
                >
                  Home
                </li>
              </Link>
              <Link href="/dashbord">
                <li
                  className={`${animationClass} hover:bg-indigo-500 px-3 rounded`}
                >
                  Appointment
                </li>
              </Link>
              <Link href="/blog">
                <li
                  className={`${animationClass} hover:bg-indigo-500 px-3 rounded`}
                >
                  Reviews
                </li>
              </Link>
              <Link href="/SignIn">
                <li
                  className={`${animationClass} hover:bg-indigo-500 px-3 rounded`}
                >
                  Contact Us
                </li>
              </Link>
              <Link href="/">
                <li
                  className={`${animationClass} hover:bg-indigo-500 px-3 rounded`}
                >
                  About
                </li>
              </Link>
              <Link href="/">
                <li
                  className={`${animationClass} hover:bg-indigo-500 px-3 rounded`}
                >
                  Log In
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>

      {/* navbar for mobile device */}

      <div className="p-6 flex lg:hidden justify-between h-10 shadow-md items-center bg-black">
        <header className="text-white font-bold">Doctors portal</header>
        {/* tap and show menu icon */}
        <div onClick={() => setOpen(!open)}>
          <RxHamburgerMenu className="text-white font-extrabold" />
        </div>
      </div>

      <nav className={`${open ? "block" : "hidden"} bg-indigo-950 `}>
        <ul className="p-6 space-y-4 text-white bg-black">
          <Link href="/">
            <li
              className={`${animationClass} hover:bg-indigo-500 px-3 rounded`}
            >
              Home
            </li>
          </Link>
          <Link href="/dashbord">
            <li
              className={`${animationClass} hover:bg-indigo-500 px-3 rounded`}
            >
              Appointment
            </li>
          </Link>
          <Link href="/blog">
            <li
              className={`${animationClass} hover:bg-indigo-500 px-3 rounded`}
            >
              Reviews
            </li>
          </Link>
          <Link href="/SignIn">
            <li
              className={`${animationClass} hover:bg-indigo-500 px-3 rounded`}
            >
              Contact Us
            </li>
          </Link>
          <Link href="/">
            <li
              className={`${animationClass} hover:bg-indigo-500 px-3 rounded`}
            >
              About
            </li>
          </Link>
          <Link href="/">
            <li
              className={`${animationClass} hover:bg-indigo-500 px-3 rounded`}
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
