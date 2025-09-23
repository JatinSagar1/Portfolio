import React from "react";
import "../css/hero.css";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <h1 className="hero-title" data-aos="fade-up">
        Hi, I'm{" "}
        <span className="highlight">
          <Typewriter
            words={["Jatin Sagar"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p className="hero-sub" data-aos="fade-up" data-aos-delay="200">
        Full Stack Developer | React.js | Node.js | Express | MongoDB | SQL
      </p>
      <div className="hero-cta" data-aos="fade-up" data-aos-delay="400">
        <a href="#projects" className="btn primary">
          View Projects
        </a>
        <a   href="https://mail.google.com/mail/?view=cm&to=jjatinsagar@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="btn">
          Contact Me
        </a>
      </div>
    </section>
  );
}
