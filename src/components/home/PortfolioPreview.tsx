
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      title: "Eco Fitness App Branding",
      category: "Branding & Design",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2670&auto=format&fit=crop",
      tags: ["Brand Identity", "Logo Design", "App UI"],
    },
    {
      id: 2,
      title: "Artisan E-commerce Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1643116774075-acc00caa9eaa?q=80&w=2670&auto=format&fit=crop",
      tags: ["E-commerce", "Web Design", "Frontend"],
    },
    {
      id: 3,
      title: "Travel Agency Marketing Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1521575107034-e0fa0b594529?q=80&w=2668&auto=format&fit=crop",
      tags: ["Social Media", "Content Strategy", "SEO"],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-waay-yellow">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Take a look at some of our recent work that showcases our expertise and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id}
              to="/portfolio" 
              className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                  <div className="text-sm font-medium text-waay-yellow mb-1">
                    {project.category}
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
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/portfolio">
            <Button className="bg-waay-black hover:bg-waay-black/90 text-white px-8">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
