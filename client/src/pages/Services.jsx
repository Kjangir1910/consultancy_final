

// import React from "react";
// import services from "../components/serviceData";
// import ServiceCard from "../components/ServiceCard";

// function ServicesPage() {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h2 style={{margin: '30px 0px 30px 0px'}} className="text-4xl font-bold text-center mb-10 text-blue-900">
//         Explore Our Services
//       </h2>
//       <div style={{marginBottom : '60px'}} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

//         {services.map((service, index) => (
//           <ServiceCard
//             key={index}
//             title={service.title}
//             description={service.description}
//             subServices={service.subServices}
//             image={service.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ServicesPage;


import React from "react";
import services from "../components/serviceData";
import ServiceCard from "../components/ServiceCard";

function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2
        className="text-4xl font-bold text-center mb-10 text-blue-900"
        style={{ margin: "30px 0" }}
      >
        Explore Our Services
      </h2>

      {/* 1 column on small screens, 2 columns from medium screen and up */}
      <div
        className="grid gap-6 grid-cols-1 md:grid-cols-2"
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
