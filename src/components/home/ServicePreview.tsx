
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicePreview = () => {
  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that reach your target audience and drive engagement across digital platforms.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      category: "marketing",
    },
    {
      id: 2,
      title: "Branding & Identity",
      description:
        "Cohesive visual identity that reflects your company values and resonates with your audience.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M12 19l7-7 3 3-7 7-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 2l7.586 7.586" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      category: "design",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Custom website and application development that delivers exceptional user experiences and performance.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      category: "development",
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      description:
        "End-to-end online store development with secure payment processing and inventory management.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M9 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      category: "development",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-waay-yellow">Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a wide range of creative and technical services to help your business stand out in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white border border-gray-100 rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 group hover:border-waay-yellow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-6 group-hover:bg-waay-yellow/10 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to="/services" className="text-waay-black font-medium inline-flex items-center group-hover:text-waay-yellow transition-colors duration-300">
                Learn More
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/services">
            <Button className="bg-waay-black hover:bg-waay-black/90 text-white px-8">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;
