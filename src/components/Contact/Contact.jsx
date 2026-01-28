import "./contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";

const contacts = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "198 West 21th Street, Suite 721 New York NY 10016",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Contact Number",
    value: "+1235 2355 98",
  },
  {
    icon: <FaPaperPlane />,
    title: "Email Address",
    value: "info@yoursite.com",
  },
  {
    icon: <SlSocialLinkedin />,
    title: "Linked in",
    Link:"www.google.com"
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <h1>Contact Me</h1>
          <span className="bg-title">Contact</span>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        {/* Cards */}
        <div className="contact-grid">
          {contacts.map((item, index) => (
            <div key={index} className="contact-card">
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              {!item.Link ?<p>{item.value}</p>:<a href={item.Link}>{item.Link}</a>}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
