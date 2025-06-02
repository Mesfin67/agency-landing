import React from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    content: "This agency transformed our digital presence! Highly recommended.",
    client: "Client One",
    image: "workout.png"
  },
  {
    content: "Their creativity and strategy are unmatched.",
    client: "Client Two",
    image: "workout.png"
  },
  {
    content: "A truly luxurious experience from start to finish.",
    client: "Client Three",
    image: "workout.png"
  },
  {
    content: "Innovative and captivating work. Our brand was reborn.",
    client: "Client Four",
    image: "workout.png"
  },
  {
    content: "Professional, creative, and reliable.",
    client: "Client Five",
    image: "workout.png"
  }
];

// Duplicate testimonials for seamless marquee effect
const carouselItems = [...testimonials, ...testimonials];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
        <hr />
      <h2 className="testimonial-header">Testimonials</h2>
      <div className="testimonial-carousel-wrapper">
        <div className="testimonial-carousel">
          {carouselItems.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <img src={t.image} alt={t.client} className="testimonial-image" />
              <p className="testimonial-text">"{t.content}"</p>
              <p className="testimonial-client">- {t.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
