import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { ContextAuth } from "../../../ContextApi/ContextProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { logOut, user } = useContext(ContextAuth);
  const animationClass =
    "transition ease-in-out hover:scale-110 hover:text-white duration-150";
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {});
  };
  return (
    <>
      {/* desktop navbar */}
      <div className="lg:flex justify-between p-6 h-20 shadow-md items-center hidden bg-[#2D9596] sticky top-0 z-50">
        <header>
          <h1 className="text-2xl text-[#F1FADA] font-bold">Doctors Portal</h1>
        </header>
        <nav>
          <div>
            <ul className="flex space-x-4 text-lg text-[#F1FADA]">
              <Link to="/">
                <li
                  className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}
                >
                  Home
                </li>
              </Link>
              <Link to="/appointment">
                <li
                  className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}
                >
                  Appointment
                </li>
              </Link>
              {
                user && <Link to="/dashbord">
                <li
                  className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}
                >
                  Dashbord
                </li>
              </Link>
              }
              <Link href="/">
                <li
                  className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}
                >
                  About
                </li>
              </Link>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}
                >
                  <li>Log out</li>
                </button>
              ) : (
                <>
                  <Link to="/signup">
                    <li
                      className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}
                    >
                      Sign Up
                    </li>
                  </Link>
                  <Link to="/login">
                    <li
                      className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}
                    >
                      Log In
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>

      {/* navbar for mobile device */}

      <div className="p-6 flex lg:hidden justify-between h-10 shadow-md items-center bg-[#2D9596]">
        <header className="text-[#9AD0C2] font-bold">Doctors portal</header>
        {/* tap and show menu icon */}
        <div onClick={() => setOpen(!open)}>
          <RxHamburgerMenu className="text-[#9AD0C2] font-extrabold" />
        </div>
      </div>

      <nav className={`${open ? "block" : "hidden"} bg-indigo-950 `}>
        <ul className="p-6 space-y-4 text-[#9AD0C2] bg-[#D4D9E3]">
          <Link href="/">
            <li className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}>
              Home
            </li>
          </Link>
          <Link to="/appointment">
            <li className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}>
              Appointment
            </li>
          </Link>
          {
            user && <Link  to="/dashbord">
            <li className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}>
              Dashbord
            </li>
          </Link>
          }
          <Link href="/">
            <li className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}>
              About
            </li>
          </Link>
          {user ? (
                <button
                  onClick={handleLogOut}
                  className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}
                >
                  <li>Log out</li>
                </button>
              ) : (
                <>
                  <Link to="/signup">
                    <li
                      className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}
                    >
                      Sign Up
                    </li>
                  </Link>
                  <Link to="/login">
                    <li
                      className={`${animationClass} hover:bg-[#9AD0C2] px-3 rounded`}
                    >
                      Log In
                    </li>
                  </Link>
                </>
              )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
