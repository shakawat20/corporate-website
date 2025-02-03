import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" }, 
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
     { name: "Blog", path: "/blog" },
    { name: "Technology", path: "/technology" },
    { name: "Services & Product", path: "/products" },

   
  ];

  const list = navItems.map((item, index) => (
    <li key={index}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `transition-colors duration-300 ${
            isActive ? "text-white font-bold" : "text-gray-300"
          } hover:text-white-500 visited:text-white`
        }
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <div className="navbar bg-transparent absolute z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" aria-label="Menu" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {list}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">YSP TECHNOLOGY</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};

export default Navbar;
