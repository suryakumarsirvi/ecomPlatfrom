import React from "react";
import { useStore } from "../Context/StoreContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart, wishlist } = useStore();

  return (
    <nav className="h-16 w-full font-semibold bg-white flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link to={"/"} className="nav-link" href="">HOME</Link>
        <a className="nav-link" href="">SHOP</a>
        <a className="nav-link" href="">BLOG</a>
        <a className="nav-link" href="">PAGES</a>
        <a className="nav-link" href="">BUY</a>
      </div>
      <img
        onClick={() => window.location.reload()}
        className="h-16 object-cover cursor-pointer"
        src="public/Images/logo.png"
        alt="App Navbar Logo"
      />
      <div className="flex items-center gap-6">
        <p className="nav-link">LOGIN/REGISTER</p>
        <i className="ri-search-line text-lg font-extralight cursor-pointer">
        </i>
        <Link
          to="/wishlist"
          className="ri-heart-line text-lg font-extralight relative cursor-pointer"
        >
          <span className="absolute left-3 px-1 bg-red-500 text-white rounded-full text-xs">
            {wishlist.length}
          </span>
        </Link>
        <Link
          to="/checkout"
          className="ri-shopping-cart-line text-lg font-extralight relative cursor-pointer"
        >
          <span className="absolute left-3 px-1 bg-red-500 text-white rounded-full text-xs">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
