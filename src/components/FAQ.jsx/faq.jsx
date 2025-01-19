import React, { useState } from 'react';
import './faq.css';

const faqData = [
  {
    question: "What types of yachts are available for rent in Dubai?",
    answer: "We offer a range of yachts to suit different needs and preferences. Our fleet includes luxury yachts, sport yachts, and mega yachts, each equipped with various amenities such as sun decks, jacuzzis, and fully-equipped kitchens. You can choose based on your group size, the occasion, and your desired luxury level."
  },
  {
    question: "How do I book a yacht rental?",
    answer: "Booking a yacht rental is simple. You can either book directly through our website by selecting your preferred yacht and rental duration or contact our customer service team via phone or email. We recommend booking in advance to ensure availability, especially during peak seasons."
  },
  {
    question: "What is included in the yacht rental price?",
    answer: "The rental price typically includes the use of the yacht, its standard amenities, and the services of a professional crew (if applicable). Additional costs may include fuel, catering, and any extra services or activities you request, such as water sports or special decorations."
  },
  {
    question: "Are there any additional charges I should be aware of?",
    answer: "Yes, there may be additional charges such as fuel costs, docking fees, and optional extras like catering, entertainment, or water sports equipment. We provide a detailed quote before you confirm your booking, so you’ll know exactly what to expect."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Our cancellation policy varies depending on the booking terms and conditions. Generally, we offer a full refund for cancellations made more than 30 days before the rental date. Cancellations within 30 days may incur a cancellation fee. Please check our terms and conditions or contact us directly for specific details."
  },
  {
    question: "What should I bring on board?",
    answer: "We recommend bringing personal items such as sunscreen, hats, swimwear, and any special items you might need. We provide towels, safety equipment, and basic amenities on board. If you have any specific requests for food or beverages, please let us know in advance."
  },
  {
    question: "Can I bring my own food and drinks?",
    answer: "Yes, you can bring your own food and drinks. However, if you prefer, we also offer catering services that can be tailored to your preferences. Please inform us in advance if you wish to use our catering services or if you have any dietary restrictions."
  },
  {
    question: "Is it possible to hire a crew or captain for the yacht?",
    answer: "Yes, most of our yachts come with a professional crew and captain. If you prefer a yacht without a crew, please let us know in advance so we can arrange accordingly. Our experienced crew members are trained to ensure your safety and enhance your overall experience."
  },
  {
    question: "What happens in case of bad weather?",
    answer: "Safety is our top priority. In the event of bad weather, we will work with you to reschedule your booking or offer a full refund if rescheduling is not possible. We monitor weather conditions closely and will provide guidance based on the forecast."
  },
  {
    question: "Can I customize my yacht experience?",
    answer: "Absolutely! We offer a range of customization options, including special decorations, themed events, and personalized itineraries. Let us know your preferences, and we will do our best to accommodate your requests and make your experience memorable."
  },
  {
    question: "Are there any age restrictions for renting a yacht?",
    answer: "There are no specific age restrictions for renting a yacht. However, if you are planning to host an event or party, please ensure that you adhere to any local regulations and guidelines regarding age and safety. For private charters, we recommend having at least one responsible adult on board."
  },
  {
    question: "What safety measures are in place on the yacht?",
    answer: "All our yachts are equipped with essential safety equipment, including life jackets, first aid kits, and emergency protocols. Our crew members are trained in safety procedures and are there to assist you throughout your trip. Your safety and comfort are our top priorities."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions (FAQ) for Yacht Rental in Dubai</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="collapsible-container">
          <div
            className="collapsible-header"
            onClick={() => toggleCollapse(index)}
          >
            {openIndex === index ? '-' : '+'} {index + 1}. {faq.question}
          </div>
          {openIndex === index && (
            <div className="collapsible-content">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
