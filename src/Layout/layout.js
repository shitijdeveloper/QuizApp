// components/Layout.js
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This renders the current route component */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
