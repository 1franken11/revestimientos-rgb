import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p><a
          href="https://www.instagram.com/rgb_corp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon instagram" size={20} />
        </a>{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61562097362152"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon facebook" size={20} />
        </a>{" "}
          <a
            href="https://wa.me/+19044225380"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon whatsapp" size={20} />
          </a>{" "}
          • ©2025 RGB Corporation {" "}
        
        • Designed by Franco Garcia
      </p>
    </footer>
  );
};

export default Footer;
