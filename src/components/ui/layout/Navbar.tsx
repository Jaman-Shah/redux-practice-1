import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border p-4 flex justify-between">
      <Link className="border p-4" to={"/"}>
        Home
      </Link>
      <Link className="border p-4" to={"/counter"}>
        Counter
      </Link>
      <Link className="border p-4" to={"/color-picker"}>
        ColorPicker
      </Link>
      <Link className="border p-4" to={"/rtk-page"}>
        RTK Page
      </Link>
      <Link className="border p-4" to={"/expenses"}>
        Expense Manage
      </Link>
      <Link className="border p-4" to={"/login"}>
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
