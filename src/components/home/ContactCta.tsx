
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactCta = () => {
  return (
    <section className="py-24 bg-waay-black relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] -left-[10%] w-[30%] h-[30%] bg-waay-yellow/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[25%] h-[25%] bg-waay-yellow/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Start Your <span className="text-waay-yellow">Next Project</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow with our creative and technical solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-waay-yellow hover:bg-waay-yellow/90 text-waay-black px-8 py-6 text-lg">
                Get in Touch
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
