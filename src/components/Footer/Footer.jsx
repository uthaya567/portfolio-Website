import "./footer.css";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-col">
          <h4>About</h4>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <div className="socials">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h4>Links</h4>
          <ul>
            <li><FaArrowRight /> Home</li>
            <li><FaArrowRight /> About</li>
            <li><FaArrowRight /> Services</li>
            <li><FaArrowRight /> Projects</li>
            <li><FaArrowRight /> Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><FaArrowRight /> Web Design</li>
            <li><FaArrowRight /> Web Development</li>
            <li><FaArrowRight /> Business Strategy</li>
            <li><FaArrowRight /> Data Analysis</li>
            <li><FaArrowRight /> Graphic Design</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Have a Questions?</h4>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+2 392 3929 210</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>info@yourdomain.com</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        Copyright ©2026 All rights reserved | This template is made with ❤️ by Colorlib
      </div>
    </footer>
  );
}
