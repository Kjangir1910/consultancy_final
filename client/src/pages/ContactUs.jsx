import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Thank you for contacting us. We will get back to you.');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        alert(data.error || 'Something went wrong. Try again later.');
      }
    } catch (error) {
      alert('Server error. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">We'd love to hear from you. Reach out to us with your queries or feedback!</p>
      </div>

      <div className="row justify-content-center">
        {/* Contact Info Section */}
        <div className="col-md-4 mb-4">
          <div className="bg-light p-4 rounded shadow-sm h-100">
            <h5 className="mb-4">Get in Touch</h5>
            <p className="mb-3"><FaEnvelope className="me-2 text-primary" /> <strong>Email:</strong> example@consultancy.com</p>
            <p className="mb-3"><FaPhone className="me-2 text-primary" /> <strong>Phone:</strong> +91 1234567890</p>
            <p className="mb-0"><FaMapMarkerAlt className="me-2 text-primary" /> <strong>Address:</strong> Mansarovar, Jaipur</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title mb-4 text-center">Send Us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g., +91 9876543210"
                    required
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary fw-bold">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
