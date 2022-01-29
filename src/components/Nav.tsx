import React from "react";
import { Link } from "react-router-dom";
import { BsBagFill } from "react-icons/bs";

const Nav: React.FC = () => (
  <ul className="flex justify-between items-center p-3 lg:px-8 shadow-lg shadow-blue-100/50">
    <li className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-xs">
      <Link to="/">Lena Schuster</Link>
    </li>
    <li>
      <Link to="/basket">
        <BsBagFill className="fill-blue-400 w-6 h-6" />
      </Link>
    </li>
  </ul>
);

export default Nav;
