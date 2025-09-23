import React from "react";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../css/SocialSidebar.css";

export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <a href="https://github.com/JatinSagar1" target="_blank" rel="noopener noreferrer">Github</a>
      <a href="https://linkedin.com/in/jatin-sagar-99025922a" target="_blank" rel="noopener noreferrer">Link</a>
      <a href="https://x.com/jjatinsagar" target="_blank" rel="noopener noreferrer">Twitt</a>
    </div>
  );
}
