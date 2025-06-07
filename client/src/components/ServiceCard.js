import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, image, subServices }) => (
  <div
    className="bg-white rounded-xl shadow-lg transition-transform duration-500 transform hover:scale-105 hover:rotate-[1deg] hover:shadow-2xl"
    style={{
      borderRadius: "10px",
      margin: "10px",
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
          className="mt-2 text-white text-sm px-4 py-2 rounded"
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
