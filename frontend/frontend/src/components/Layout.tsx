import React from "react";
import Navbar from "./Navbar"; // Your navigation bar
import Footer from "./Footer"; // Your footer

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("Layout is rendering");
  return (
    <>
      <Navbar />
      <main>{children}</main> {/* This renders the page-specific content */}
      <Footer />
    </>
  );
};

export default Layout;
