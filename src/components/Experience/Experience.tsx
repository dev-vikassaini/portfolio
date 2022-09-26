import React from 'react'
import './Experience.css';

function Experience() {
  return (
    <React.Fragment>
      <div className="experience-container">
        <div className="achievement">
          <div className='circle'>8+</div>
          <span>years</span>
          <span>Experience</span>
        </div>
        <div className="achievement">
          <div className='circle'>14+</div>
          <span>completed</span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          <div className='circle'>3+</div>
          <span>Companies</span>
          <span>Work</span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Experience;