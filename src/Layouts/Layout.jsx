import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "./Hero";
import { Route, Routes } from "react-router-dom";
import CheckOut from "../Components/CheckOut";
import Wishlist from "../Components/Wishlist";

const Layout = () => {
  return (
    <div className="w-[90%] p-4 h-screen mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
};

export default Layout;
