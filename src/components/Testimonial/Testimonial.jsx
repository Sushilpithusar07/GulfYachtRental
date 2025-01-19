import React from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "John Doe",
    text: "Had an amazing experience! The yacht was luxurious and the service was top-notch.",
  },
  {
    name: "Jane Smith",
    text: "The best yacht rental service in Dubai! Highly recommend.",
  },
  {
    name: "Mike Johnson",
    text: "A fantastic day out on the water. The crew was professional and friendly.",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2>Customer Testimonials</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
