import React from "react";
import Header from "../componets/Header";
import Footer from "../componets/Footer";

const Layout = ({children}) => (
  <div>
    <Header />
      {children}
    <Footer />
  </div>
);

export default Layout;