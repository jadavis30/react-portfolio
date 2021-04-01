import React from 'react';
import currentResume from '../../assets/JaredDavisResume.pdf'


function Resume() {
    
    return (
        <section>
            <h1>Work Experience</h1>
                <div>
                    <h2>My Current <a href={currentResume}>Resume</a></h2>
                    <h2>Skills and Languages</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>API creation and integration</li>
                        <li>Node.js</li>
                        <li>Testing through Jest</li>
                        <li>Express.js</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Progressive Web Applications</li>
                        <li>React</li>
                    </ul>
                </div>
        </section>
    )
}

export default Resume;