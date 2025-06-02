import React from "react";
import { motion } from "framer-motion";
import NavbarCustom from "./NavbarCustom";
import PartnersSection from "./PartnersSection";
import OurServices from "./OurServices";
import PortfolioPreview from "./PortfolioPreview";
import TestimonialSection from "./TestimonialSection";
import Contact from "./Contact";
import Footer from "./Footer";
import AnimatedButton from "./AnimatedButton"; 

const Home = () => {
  return (
    <div>
      <NavbarCustom />
      {/* Hero Section */}
      <motion.section
        className="hero d-flex flex-column align-items-center justify-content-center"
        style={styles.hero}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div style={styles.overlay}>
          <motion.h1
            style={{ ...styles.tagline, textAlign: "center", width: "100%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Elevate Your Brand with Exquisite Design
          </motion.h1>
          <motion.p
            style={{ ...styles.intro, textAlign: "center", width: "100%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            We blend creativity and strategy to deliver digital experiences that
            captivate and inspire.
          </motion.p>
          <AnimatedButton />
        </div>
      </motion.section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Our Services Section */}
      <section id="services">
        <OurServices />
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio-preview">
        <PortfolioPreview />
      </section>

      {/* Testimonial Section */}
      <section id="why-us">
        <TestimonialSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  hero: {
    position: "relative",
    height: "100vh",
    width: "100%",
    backgroundImage: "url(two.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    textAlign: "center",
  },
  tagline: {
    fontSize: "3.5rem",
    marginBottom: "1rem",
    fontFamily: "Playfair Display, serif",
  },
  intro: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
    lineHeight: "1.5",
  },
};

export default Home;
