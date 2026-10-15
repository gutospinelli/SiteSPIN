import React from "react";
import Hero from "@/components/Hero";
import WhySpinSection from "@/components/WhySpinSection";
import ProductCardGrid from "@/components/ProductCardGrid";
import ComparisonSection from "@/components/ComparisonSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhySpinSection />
      <ProductCardGrid />
      <ComparisonSection />
      <ContactSection />
    </div>
  );
}
