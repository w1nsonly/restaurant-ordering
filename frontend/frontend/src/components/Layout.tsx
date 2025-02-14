import React from "react";
import Header from "./Header"; // header
import Navbar from "./Navbar"; // navigation bar
import Footer from "./Footer"; // footer

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("Layout is rendering");
  return (
    <>
      <Header />
      <div id="container">
        <Navbar />
        <main>{children}</main> {/* This renders the page-specific content */}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
