import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  // Routes where footer should NOT show
  const hideFooterRoutes = ["/login", "/register"];

  const showFooter = !hideFooterRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />

      <main>
        <Outlet />
      </main>

      {showFooter && <Footer />}
    </>
  );
};

export default MainLayout;
