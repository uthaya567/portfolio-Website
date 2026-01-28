import { useEffect, useState } from "react";
import "./hero.css";

// Import images from src/assets
import zoro from "../assets/zoro.jpg";

const slides = [
  {
    title: "I'm Uthaya Kumar",
    subtitle: "A Freelance Web Designer",
    button1: "Hire Me",
    button2: "My Works",
    image: zoro, // imported from src/assets
  },
  {
    title: "I'm Rudeus Developer",
    subtitle: "Full Stack Web Engineer",
    button1: "Contact Me",
    button2: "Portfolio",
    image: zoro,
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-wrapper">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === index ? "active" : ""}`}
        >
          <div className="hero-content">
            <small>HELLO!</small>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>

            <div className="hero-buttons">
              <button className="btn primary">{slide.button1}</button>
              <button className="btn outline">{slide.button2}</button>
            </div>
          </div>

          <img
            src={slide.image}
            className="hero-image"
            alt={slide.title} // accessibility
          />
        </div>
      ))}
    </div>
  );
}
