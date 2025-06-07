// src/components/ServiceCard.jsx

// import React from "react";
// import { Link } from "react-router-dom"; 

// const ServiceCard = ({ title, description, image, subServices }) => (
//   <div style={{borderRadius: '10px', margin:'10px'}} className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
//     {/* {image && (
//       <img src={image} alt={title} className="w-full h-40 object-cover" />
//     )} */}
//     <div className="p-4">
//       <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
//       <p className="text-gray-600 text-sm mb-3">{description}</p>
//       {subServices && (
//         <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
//           {subServices.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       )}

// <Link to="/contactus"> {/* Wrap the button with Link */}
// <button
//   className="mt-auto text-white text-sm px-4 py-2 rounded"
//   style={{ backgroundColor: "#1D4ED8", hover: { backgroundColor: "#2563EB" } }}
// >
//   Learn More
// </button>
//       </Link>

//     </div>
//   </div>
// );

// export default ServiceCard;



import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, image, subServices }) => (
  <div
    className="bg-white rounded-xl shadow-lg transition-transform transform hover:rotate-y-6 hover:scale-105 hover:shadow-2xl duration-500 perspective"
    style={{
      margin: "10px",
      borderRadius: "10px",
      transformStyle: "preserve-3d",
      willChange: "transform",
    }}
  >
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      {subServices && (
        <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
          {subServices.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      <Link to="/contactus">
        <button
          className="mt-auto text-white text-sm px-4 py-2 rounded"
          style={{
            backgroundColor: "#1D4ED8",
          }}
        >
          Learn More
        </button>
      </Link>
    </div>
  </div>
);

export default ServiceCard;
