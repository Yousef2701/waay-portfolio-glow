
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCta from "@/components/home/ContactCta";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Eco Fitness App Branding",
      category: "branding",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2670&auto=format&fit=crop",
      tags: ["Brand Identity", "Logo Design", "App UI"],
      client: "EcoFit Inc.",
    },
    {
      id: 2,
      title: "Artisan E-commerce Website",
      category: "development",
      image: "https://images.unsplash.com/photo-1643116774075-acc00caa9eaa?q=80&w=2670&auto=format&fit=crop",
      tags: ["E-commerce", "Web Design", "Frontend"],
      client: "Artisans Marketplace",
    },
    {
      id: 3,
      title: "Travel Agency Marketing Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1521575107034-e0fa0b594529?q=80&w=2668&auto=format&fit=crop",
      tags: ["Social Media", "Content Strategy", "SEO"],
      client: "Wanderlust Adventures",
    },
    {
      id: 4,
      title: "Finance Mobile App",
      category: "development",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
      tags: ["Mobile App", "UI/UX", "Development"],
      client: "MoneyWise Finance",
    },
    {
      id: 5,
      title: "Fashion Brand Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1609217416690-6a1528d990a0?q=80&w=2670&auto=format&fit=crop",
      tags: ["Branding", "Logo Design", "Identity"],
      client: "Luxe Style Co.",
    },
    {
      id: 6,
      title: "Tech Conference Promotion",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop",
      tags: ["Event Marketing", "Social Media", "Advertising"],
      client: "TechFuture Conference",
    },
    {
      id: 7,
      title: "Restaurant Website Redesign",
      category: "development",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2674&auto=format&fit=crop",
      tags: ["Web Design", "UX/UI", "Frontend"],
      client: "Savory Plate Restaurant",
    },
    {
      id: 8,
      title: "Beauty Brand Packaging",
      category: "branding",
      image: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=2670&auto=format&fit=crop",
      tags: ["Packaging", "Brand Design", "Print"],
      client: "Glow Cosmetics",
    },
    {
      id: 9,
      title: "Real Estate Marketing Platform",
      category: "development",
      image: "https://images.unsplash.com/photo-1582377224944-9f7aebc3ee1c?q=80&w=2574&auto=format&fit=crop",
      tags: ["Web App", "CRM", "Property Management"],
      client: "HomeStyle Properties",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((project) => project.category === activeFilter);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "branding", label: "Branding" },
    { id: "development", label: "Development" },
    { id: "marketing", label: "Marketing" },
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
                Our <span className="text-waay-yellow">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our work across different industries and services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-waay-yellow text-waay-black"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                        <div className="text-sm font-medium text-waay-yellow mb-1">
                          {project.client}
                        </div>
                        <h3 className="text-xl font-bold text-waay-black mb-2">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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

export default Portfolio;
