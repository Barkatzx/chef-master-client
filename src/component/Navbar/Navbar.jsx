import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const handleLogout = () => {
    handleSignOut();
  };

  return (
    <nav className="bg-pink-500">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-white text-lg font-bold">ChefHub</h1>
            </Link>
            </div>
            <div className="justify-between">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-gray-900"
                  exact
                >
                  Home
                </NavLink>

                <NavLink
                  to="/blog"
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-gray-900"
                >
                  Blog
                </NavLink>

                <NavLink
                  to="/contact"
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-gray-900"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="md:ml-6 md:flex md:items-center">
              {user ? (
                <>
                  {user.photoURL && (
                    <img
                      title={user.displayName}
                      className="h-12 rounded-full border-2 border-white"
                      src={user?.photoURL}
                      alt=""
                    />
                  )}
                  <button
                    onClick={handleLogout}
                    className="ml-5 inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-gray-900 hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-gray-900 hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
