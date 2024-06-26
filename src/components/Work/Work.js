import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Work.css';
import { workSamples } from './workSamplesData';
const WorkSample = () => {
  

  const [hoveredItem, setHoveredItem] = useState(false);

  const handleItemHover = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section>
      
      <div className="workSamplesMainTitle">Some of my recent work include:</div>
      <div className="work-samples">
        {workSamples.map((sample) => (
          <div
            key={sample.id}
            className={`work-sample ${hoveredItem === sample.id ? 'hovered' : ''}`}
            onMouseEnter={() => handleItemHover(sample.id)}
            onMouseLeave={handleItemLeave}
          >
            <div className="work-sample-content">
              {hoveredItem === sample.id ? (
                <>
                  <h3>{sample.title}</h3>
                  <p>{sample.description}</p>
                  <Link to={{
                    pathname: `/projects/${sample.id}`,
                    state: {
                      id: sample.id,
                    },
                  }} style={{"font-size": "0.9rem"}}>Read More</Link>
                </>
              ) : (
                <img className="work-sample-image" src={sample.imageUrl} alt={sample.title} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSample;
