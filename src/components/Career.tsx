import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>QuickFox Consulting (Kupondole, Lalitpur)</h5>
              </div>
              <h3>Aug 2025 – Jan 2026</h3>
            </div>
            <p>
              Built RPA solutions using Selenium to automate data entry and
              web-scraping, streamlining repetitive workflows and supporting ML
              pipeline integration.
            </p>
            <p>
              Analyzed 20+ construction project datasets to identify performance
              bottlenecks and operational inefficiencies.
            </p>
            <p>
              Developed and deployed interactive Power BI dashboards improving
              budget visibility and project tracking by 40%.
            </p>
            <p>
              Automated data cleaning and transformation workflows using Power
              Query and DAX, reducing manual reporting time by 30% and enhancing
              accuracy.
            </p>
            <p>
              Collaborated with international clients to design tailored dashboards
              and deliver actionable insights for performance and resource
              optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
