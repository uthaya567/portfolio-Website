import "./about.css";
import zoro from "../../assets/zoro.jpg"
export default function About() {
  return (
    <div id="about" className="about-section">
      <div className="about-container">

        {/* Image */}
        <div className="about-image">
          <img src={zoro} alt="profile" />
        </div>

        {/* Content */}
        <div className="about-content">
          <div className="title-wrapper">
            <h1>About Me</h1>
            <span className="bg-text">About</span>
          </div>

          <p className="about-desc">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <div className="about-info">
            <div><strong>Name:</strong> Clark Thompson</div>
            <div><strong>Date of birth:</strong> January 01, 1987</div>
            <div><strong>Address:</strong> San Francisco CA 97987 USA</div>
            <div><strong>Zip code:</strong> 1000</div>
            <div><strong>Email:</strong> clarkthomp@gmail.com</div>
            <div><strong>Phone:</strong> +1-2234-5678-9-0</div>
          </div>

          <div className="about-footer">
            <h3>
              <span>120</span> Project Complete
            </h3>

            <button className="btn-download">Download CV</button>
          </div>
        </div>

      </div>
    </div>
  );
}
