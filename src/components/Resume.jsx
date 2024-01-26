// Resume component
import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faJs, faReact, faNode, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

// Adding icons to library 
library.add(faJs, faReact, faNode, faHtml5, faCss3);

const Resume = () => {
    return (
        <div className='container resume-container'>
            <h1>My Resume</h1>
            <p>
                Download my resume{' '}
                <a href="https://docs.google.com/document/d/1n5xFQlzUqrrLAGvJQet2yP8yrTDy23TWF20lv1xC1fo/edit" target='_blank' rel='noopener noreferrer'>
                    here
                </a>
                .
            </p>
            <h2>Proficiencies</h2>
            <ul>
            <li><FontAwesomeIcon icon={faJs} /> JavaScript (Es6+)</li>
                <li><FontAwesomeIcon icon={faReact} /> React</li>
                <li><FontAwesomeIcon icon={faNode} /> Express.js</li>
                <li><FontAwesomeIcon icon={faNode} /> Node.js</li>
                <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                <li><FontAwesomeIcon icon={faCss3} /> CSS</li>
            </ul>
        </div>
    );
};

export default Resume 