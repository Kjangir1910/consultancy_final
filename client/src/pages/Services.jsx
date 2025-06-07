import React from "react";
import services from "../components/serviceData";
import ServiceCard from "../components/ServiceCard";

function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">
        Explore Our Services
      </h2>

      {/* Grid with 2 columns always */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        style={{ marginBottom: "60px" }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            subServices={service.subServices}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
