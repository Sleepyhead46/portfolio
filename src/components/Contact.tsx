import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sdeshar9803@gmail.com" data-cursor="disable">
                sdeshar9803@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+9779847903839" data-cursor="disable">
                +977 98479 03839
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Sleepyhead46"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/samyak-deshar-081917279/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/sdeshar9803"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              X <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/samyakdeshar/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>SAMYAK DESHAR</span>
            </h2>
            <h5>
              <MdCopyright />2026 Samyak Deshar · Powered by curiosity and caffeine.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
