import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

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
    { name: language === 'ar' ? "الرئيسية" : "Home", path: "/" },
    { name: language === 'ar' ? "خدماتنا" : "Services", path: "/services" },
    { name: language === 'ar' ? "أعمالنا" : "Portfolio", path: "/portfolio" },
    { name: language === 'ar' ? "من نحن" : "About", path: "/about" },
    { name: language === 'ar' ? "اتصل بنا" : "Contact", path: "/contact" },
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
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className={isScrolled ? "text-waay-black" : "text-waay-white"}>W</span>
            <span className={`text-waay-yellow ${isScrolled ? "" : "animate-glow"}`}>aay</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
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
              } ${language === 'ar' ? 'font-kufi' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="bg-waay-yellow hover:bg-waay-yellow/90 text-waay-black font-medium"
          >
            {language === 'ar' ? 'ابدأ مشروعك' : 'Start Project'}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className={`${
              isScrolled ? "text-waay-black" : "text-waay-white"
            } hover:bg-transparent`}
          >
            <Globe className="h-5 w-5" />
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className={`${
              isScrolled ? "text-waay-black" : "text-waay-white"
            } hover:bg-transparent`}
          >
            <Globe className="h-5 w-5" />
          </Button>
          <button
            className="text-waay-black z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 ${language === 'ar' ? 'left-0' : 'right-0'} bottom-0 z-40 w-[70%] bg-white shadow-xl transition-transform duration-300 transform ${
            isMobileMenuOpen ? 'translate-x-0' : language === 'ar' ? '-translate-x-full' : 'translate-x-full'
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
                  } ${language === 'ar' ? 'font-kufi' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-waay-yellow hover:bg-waay-yellow/90 text-waay-black mt-4">
                {language === 'ar' ? 'ابدأ مشروعك' : 'Start Project'}
              </Button>
            </nav>
          </div>
        </div>
        
        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
