
import React from "react";
import Hero from "@/components/home/Hero";
import ServicePreview from "@/components/home/ServicePreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Clients from "@/components/home/Clients";
import ContactCta from "@/components/home/ContactCta";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicePreview />
        <PortfolioPreview />
        <Clients />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
};

export default Index;
