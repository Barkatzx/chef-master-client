import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import ActiveLink from "../../../ActiveLink/ActiveLink";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar shadow-md bg-black lg:px-10 py-5 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <ActiveLink className="hover:bg-green-400" to="/">
                  Home
                </ActiveLink>
              </li>
              <li>
                <ActiveLink className="hover:bg-green-400" to="/contact">
                  Contact
                </ActiveLink>
              </li>
              <li>
                <ActiveLink className="hover:bg-green-400" to="/blog">
                  Blog
                </ActiveLink>
              </li>
            </ul>
          </div>
          <p className="font-bold text-2xl lg:text-4xl">
            Chef<span className="text-green-500">Info</span>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ActiveLink className="hover:bg-green-400" to="/">
                Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink className="hover:bg-green-400" to="/contact">
                Contact
              </ActiveLink>
            </li>
            <li>
              <ActiveLink className="hover:bg-green-400" to="/blog">
                Blog
              </ActiveLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4 mr-4">
          {user ? (
            <button
              className="hover:bg-green-400 lg:px-4 py-3 rounded-lg"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          ) : (
            <Link
              className="hover:bg-green-400 lg:px-4 py-3 rounded-lg"
              to="/login"
            >
              Login{" "}
            </Link>
          )}
        </div>
        <div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="rounded-full">
                  {user ? (
                    user?.photoURL ? (
                      <img
                        src={user?.photoURL}
                        alt="userimage"
                        title={user?.displayName}
                      />
                    ) : (
                      <FaUserCircle className="text-2xl"></FaUserCircle>
                    )
                  ) : (
                    <FaUserCircle className="text-2xl"></FaUserCircle>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
