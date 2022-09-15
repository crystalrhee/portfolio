import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <main>
        <Header />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
