
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-waay-black overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-waay-yellow/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-waay-yellow/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" 
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='%23FFFFFF'/%3E%3C/svg%3E")`, backgroundSize: '20px 20px'}} />

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center" ref={textRef}>
          <h5 className="text-waay-yellow uppercase tracking-wider mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-500 font-medium">
            Design & Development Agency
          </h5>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-500 delay-100">
            We Create <span className="text-waay-yellow animate-glow">Digital Experiences</span> That Matter
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-500 delay-200">
            From concept to launch, we build websites, brands, and digital marketing campaigns that connect with your audience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-500 delay-300">
            <Link to="/contact">
              <Button className="bg-waay-yellow hover:bg-waay-yellow/90 text-waay-black px-8 py-6 text-lg">
                Start Your Project
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
          <span className="text-xs text-white/60 uppercase tracking-widest mb-2">Scroll</span>
          <svg className="w-6 h-6 text-waay-yellow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
