import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PhotoHut from '../../assets/PhotoHut/photohut.png'
import DateNight from '../../assets/PYDN/plandatenight.png'
import ProfileGen from '../../assets/TeamProfileGenerator/teamgen.png'
import SocialMedia from '../../assets/SocialMedia/socialmedia.png'
import Weather from '../../assets/weather.png'
import WorkDay from '../../assets/workday.png'


function Project() {

    return (
        <Container fluid>
            <h1>Portfolio</h1>
            <Row className="flex-row px-1">
                <Col>
                    <div>
                        <a href="https://ucf-photo-hut.herokuapp.com/">
                            <img 
                            src={PhotoHut}
                            alt="Photo Hut Website"
                            width="400"
                            height="200"/>
                        </a>
                    </div>
                </Col>
                <Col>
                    <div>
                        <a href="https://jadavis30.github.io/plan-your-date-night/">
                            <img 
                            src={DateNight}
                            alt="Plan Your Date Night Website"
                            width="400"
                            height="200"/>
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className="flex-row px-1">
                <Col>
                    <div>
                        <a href="https://github.com/jadavis30/team-profile-generator">
                            <img 
                            src={ProfileGen}
                            alt="Team Profile HTML Generator"
                            width="400"
                            height="400"/>
                        </a>
                    </div>
                </Col>
                <Col>
                    <div>
                        <a href="https://github.com/jadavis30/cranks-social-media">
                            <img 
                            src={SocialMedia}
                            alt="Social Media JSON"
                            width="400"
                            height="400"/>
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className="flex-row px-1">
            <Col>
                    <div>
                        <a href="https://jadavis30.github.io/weather/">
                            <img 
                            src={Weather}
                            alt="Weather API"
                            width="550"
                            height="400"/>
                        </a>
                    </div>
                </Col>
                <Col>
                    <div>
                        <a href="https://jadavis30.github.io/workdayscheduler/">
                            <img 
                            src={WorkDay}
                            alt="Scheduling app for workers"
                            width="550"
                            height="400"/>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Project;