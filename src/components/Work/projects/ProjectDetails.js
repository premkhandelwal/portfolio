import React from 'react';
import './ProjectDetails.css';
import DOMPurify from 'dompurify';
import { useLocation } from 'react-router-dom';
import { workSamples } from '../workSamplesData';


const ProjectDetails = () => {
  const location = useLocation();
  const id = Number.parseInt(location.pathname.split('/')[2]) || location.state;
  const workSample = workSamples.find(sample => sample.id === id);
  const {
    title,
    detailedDescription: description,
    screenshots,
    technologies,
    contributions,
    features,
    projectLink,
    type,
  } = workSample || {};

  const screenshotSize = type !== 'mobile' ? { width: '500px' } : { width: '200px',  };

  return (
    <div className="project-details">
      <div className="project-content">
        <div className="project-section black-background">
          <div className="content-section">
            <div className="project-section black-background">
              <div className="project-section-title-titleName">
                <h2>{title}</h2>
              </div>
              <div className="project-section black-background">
                <div className="project-section-content">
                  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section">
            <div className="project-section black-background">
              <div className="project-section-content screenshots-list">
                {screenshots.map((screenshot, index) => (
                  <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} style={screenshotSize} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-section white-background technologies-list">
        <h3 className="project-section-title">Key Features</h3>
        <div className="project-section-content">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="project-section white-background technologies-list">
        <h3 className="project-section-title">Technologies Used</h3>
        <div className="project-section-content">
          <ol>
            {technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ol>
        </div>
      </div>
      
      <div className="project-section white-background contributions-list">
        <h3 className="project-section-title">Contributions</h3>
        <div className="project-section-content">
          <ul>
            {contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="project-section white-background project-link-section">
        <h3 className="project-section-title">Project Links/Website</h3>
        <div className="project-section-content">
          <h5>
            <a href={projectLink}>{projectLink}</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
