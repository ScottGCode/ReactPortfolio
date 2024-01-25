import React from 'react'; 

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
                <li>JavaScript (Es6+)</li>
                <li>React</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
            </ul>
        </div>
    );
};

export default Resume 