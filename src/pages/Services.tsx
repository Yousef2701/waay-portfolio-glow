
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCta from "@/components/home/ContactCta";

const Services = () => {
  const marketingServices = [
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to increase brand awareness, engagement, and conversions.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Branding & Identity",
      description: "Complete brand development including logo design, color palette, typography and brand guidelines.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M12 19l7-7 3 3-7 7-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 2l7.586 7.586" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Print & Digital Design",
      description: "Creative design services for print materials, digital assets, marketing collaterals, and more.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const developmentServices = [
    {
      title: "Website Design & Development",
      description: "Custom website development with responsive design, SEO optimization, and content management systems.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Web Applications",
      description: "Custom web application development for business solutions, SaaS products, and digital platforms.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 21h8m-4-4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "E-commerce Solutions",
      description: "End-to-end e-commerce development with payment gateways, inventory management, and secure checkout.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M9 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-waay-black relative overflow-hidden">
          {/* Abstract background */}
          <div className="absolute inset-0">
            <div className="absolute top-[10%] -left-[10%] w-[30%] h-[30%] bg-waay-yellow/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[25%] h-[25%] bg-waay-yellow/5 rounded-full blur-[80px]" />
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="text-waay-yellow">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We offer a comprehensive range of digital services to help your business 
                grow in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Marketing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-12">
                <div className="w-12 h-1 bg-waay-yellow rounded-full mr-6"></div>
                <h2 className="text-3xl md:text-4xl font-bold">Digital Marketing & Graphic Design</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {marketingServices.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-white p-8 border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group hover:border-waay-yellow"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-6 group-hover:bg-waay-yellow/10 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-12">
                <div className="w-12 h-1 bg-waay-yellow rounded-full mr-6"></div>
                <h2 className="text-3xl md:text-4xl font-bold">Programming & Web Development</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {developmentServices.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-white p-8 border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group hover:border-waay-yellow"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-6 group-hover:bg-waay-yellow/10 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-waay-yellow">Process</span>
              </h2>
              <p className="text-gray-600 text-lg">
                We follow a proven process to deliver exceptional results for every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-waay-yellow/10 text-waay-yellow flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold mb-3">Discovery</h3>
                <p className="text-gray-600">We learn about your business, goals, and target audience to establish project objectives.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-waay-yellow/10 text-waay-yellow flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold mb-3">Planning</h3>
                <p className="text-gray-600">We create a detailed plan and strategy to achieve your goals effectively and efficiently.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-waay-yellow/10 text-waay-yellow flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold mb-3">Execution</h3>
                <p className="text-gray-600">Our team works on implementation with regular updates and milestone reviews.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-waay-yellow/10 text-waay-yellow flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
                <h3 className="text-xl font-bold mb-3">Launch & Support</h3>
                <p className="text-gray-600">We deploy your project and provide ongoing support to ensure continued success.</p>
              </div>
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
};

export default Services;
