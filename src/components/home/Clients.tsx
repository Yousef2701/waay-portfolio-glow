
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Digital Dynamics",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Creative Studios",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "Enterprise Global",
      logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=100&fit=crop&crop=center"
    },
    {
      id: 5,
      name: "Startup Hub",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&crop=center"
    },
    {
      id: 6,
      name: "Innovation Labs",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-waay-black mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with innovative companies across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client) => (
            <Card 
              key={client.id} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-waay-black">
                  {client.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
