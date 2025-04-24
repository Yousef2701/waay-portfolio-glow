
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCta from "@/components/home/ContactCta";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
      bio: "With over 15 years in creative design, Sarah leads our creative department with vision and innovation.",
    },
    {
      name: "Marcus Chen",
      position: "Technical Lead",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2487&auto=format&fit=crop",
      bio: "Marcus brings technical excellence and problem-solving skills to every development project.",
    },
    {
      name: "Amira Hassan",
      position: "Marketing Strategist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
      bio: "Amira crafts marketing strategies that connect brands with their audiences in meaningful ways.",
    },
    {
      name: "David Park",
      position: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
      bio: "David creates intuitive and beautiful interfaces that prioritize user experience and accessibility.",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace new ideas and technologies to stay at the forefront of digital solutions.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Quality",
      description: "We deliver excellence in every project, focusing on detail and craftsmanship.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "We work closely with clients to create solutions that meet their unique needs.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and respect in all our interactions.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-waay-yellow">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
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
                About <span className="text-waay-yellow">Us</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get to know our company, mission, and the team behind our creative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-1 bg-waay-yellow rounded-full mr-6"></div>
                  <h2 className="text-3xl font-bold">Our Story</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Founded in 2015, Waay began as a small team of passionate designers and developers with a vision to create digital experiences that truly matter. What started as a freelance collective quickly evolved into a full-service creative agency.
                </p>
                <p className="text-gray-600 mb-6">
                  Over the years, we've grown our team and expanded our services, but our core mission remains the same: to help businesses establish meaningful connections with their audience through thoughtful design and technology.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to serve clients across various industries, from startups to established enterprises, delivering solutions that drive growth and create lasting impact.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop"
                    alt="Waay team working together"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-waay-yellow rounded-lg opacity-50 -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-waay-yellow rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="bg-white p-10 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-waay-yellow mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  At Waay, our mission is to empower businesses with innovative digital solutions that elevate their brand, engage their audience, and drive measurable results. We combine creativity, technical expertise, and strategic thinking to create experiences that make a lasting impact.
                </p>
              </div>
              
              <div className="bg-white p-10 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-waay-yellow mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  We envision a future where every business, regardless of size, can harness the power of digital technology to reach their full potential. Our vision is to be at the forefront of this transformation, continually pushing boundaries and setting new standards for excellence in digital design and development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-waay-yellow">Values</span>
              </h2>
              <p className="text-gray-600 text-lg">
                These core principles guide everything we do and shape how we work with our clients and each other.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 group hover:border-waay-yellow"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-6 group-hover:bg-waay-yellow/10 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Our <span className="text-waay-yellow">Team</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Our talented team of creatives and technologists brings diverse skills and perspectives to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-waay-yellow mb-2">{member.position}</p>
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-sm transform translate-y-0 group-hover:translate-y-full transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-waay-yellow">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
};

export default About;
