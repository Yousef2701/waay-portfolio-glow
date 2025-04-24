
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      }`}
      dir="ltr"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className={isScrolled ? "text-waay-black" : "text-waay-white"}>W</span>
            <span className={`text-waay-yellow ${isScrolled ? "" : "animate-glow"}`}>aay</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover-underline ${
                isActive(link.path)
                  ? "text-waay-yellow"
                  : isScrolled
                  ? "text-waay-black"
                  : "text-waay-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="bg-waay-yellow hover:bg-waay-yellow/90 text-waay-black font-medium"
          >
            Start Project
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 bottom-0 z-40 w-[70%] bg-white shadow-xl transition-transform duration-300 transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col p-8 pt-20 h-full">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium ${
                    isActive(link.path) ? "text-waay-yellow" : "text-waay-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-waay-yellow hover:bg-waay-yellow/90 text-waay-black mt-4">
                Start Project
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
