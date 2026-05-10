import React, { useState } from "react";

export default function useMobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuToggle = () => {
    setMobileMenuOpen((prevValue) => !prevValue);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return {
    mobileMenuOpen,
    menuToggle,
    closeMenu,
  };
}
