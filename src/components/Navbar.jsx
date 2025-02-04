import React, { useState } from "react";
import NavigationLinks from "./NavigationLinks";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center gap-10 p-8 bg-transparent z-50">
      {/* Logo */}
      <div>
        <img src="/assets/logo.png" alt="logo" className="h-8 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavigationLinks
          links={[
            { label: "Home", id: "home" },
            { label: "Product", id: "product" },
            { label: "Tentang Kami", id: "about" },
            { label: "Kontak", id: "contact" },
          ]}
        />
      </div>

      {/* Desktop Get Started Button */}
      <div className="hidden md:block">
        <a
          href="#"
          className="relative bg-[var(--primary)] p-[10px] rounded-lg text-white font-medium hover:text-black hover:bg-white hover:border hover:border-black transition-all duration-300"
        >
          Get Started
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden z-50 focus:outline-none cursor-pointer"
      >
        {isMobileMenuOpen ? (
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <NavigationLinks
            links={[
              { label: "Home", id: "home" },
              { label: "Product", id: "product" },
              { label: "Tentang Kami", id: "about" },
              { label: "Kontak", id: "contact" },
            ]}
            mobile
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <a
            href="#"
            className="bg-[var(--primary)] px-6 py-3 rounded-lg text-white font-medium hover:bg-blue-600 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
