import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <a
                    href="https://github.com/Sleepyhead46/CropAI-Crop-Recommendation-Plant-Disease-Classification-.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>CropAI</h4>
                  </a>
                  <p>Crop Recommendation & Plant Disease Classification App</p>
                </div>
              </div>
              <p>
                Built a Streamlit app combining Random Forest and CNN models for real-time crop recommendation and disease detection.
              </p>
              <p className="work-tags">Python • Streamlit • scikit-learn • TensorFlow</p>
            </div>
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <a
                    href="https://github.com/Sleepyhead46/Fake-News-Detection.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>Fake News Detection</h4>
                  </a>
                  <p>ML-based fake news classifier with live Streamlit deployment</p>
                </div>
              </div>
              <p>
                Developed an NLP classifier using TF-IDF and machine learning models, with visual analytics for prediction insights.
              </p>
              <p className="work-tags">Python • Streamlit • scikit-learn • NLP</p>
            </div>
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Power BI Reports</h4>
                  <p>Mobile sales dashboard & Credit card analysis</p>
                </div>
              </div>
              <p>
                Interactive Power BI reports for mobile-phone sales and credit-card analysis, with data modelling, DAX measures, and actionable dashboards.
              </p>
              <p className="work-tags">Power BI • DAX • Power Query • Data Modeling</p>
              <div style={{ marginTop: 12 }}>
                <a
                  href="https://github.com/Sleepyhead46/Mobile-phone-sales-powerbi-dashboard"
                  target="_blank"
                  rel="noreferrer"
                  className="work-link"
                  style={{ display: 'block', marginBottom: 6 }}
                >
                  Mobile-phone-sales Power BI dashboard
                </a>
                <a
                  href="https://github.com/Sleepyhead46/Credit-Card-Power-Bi-analysis"
                  target="_blank"
                  rel="noreferrer"
                  className="work-link"
                  style={{ display: 'block' }}
                >
                  Credit Card Power BI analysis
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
