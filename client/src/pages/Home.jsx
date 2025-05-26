import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5 mb-5"> {/* <-- Added mb-5 for bottom spacing */}
      {/* Hero Section */}
      <div className="text-center py-5 bg-light rounded shadow-sm">
        <h1 className="display-5 fw-bold">Empowering Your Career Journey</h1>
        <p className="lead mt-3">
          Career decisions are crucial – let us help you make the right ones.
        </p>
      </div>

      {/* About + CTA Side by Side */}
      <div className="row mt-5">
        {/* About Section - Left */}
        <div className="col-md-7 mb-4">
          <h2>Welcome!</h2>
          <p>
            Career choices are the biggest quest of the freshers, as well as that
            of experienced candidates. Choosing the right course of study, opting
            for a good role, and selecting a good organization to start with – 
            everything is just overwhelming.
          </p>
          <p>
            I have served the industry for 7 years now and have helped thousands
            of job aspirants in finding the jobs, preparing them for tough
            interview processes, and guiding them to make the right career
            decisions.
          </p>
          <p>
            My goal is to help students and corporate professionals using all the
            knowledge I've gained over the last 7 years in recruitment,
            performance management, and career counselling.
          </p>
        </div>

        {/* CTA Section - Right */}
        <div className="col-md-5">
          <div className="bg-primary text-white p-4 rounded text-center h-100 d-flex flex-column justify-content-center">
            <h4>Need help with your resume or career guidance?</h4>
            <p className="mt-2">
              Visit our <strong>Services</strong> page for resume writing, editing,
              performance management, and career counselling services.
            </p>
            <Link to="/services" className="btn btn-light fw-bold mt-3 align-self-center">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
