import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PhotoHut from '../../assets/PhotoHut/photohut.png'
import DateNight from '../../assets/PYDN/plandatenight.png'
import ProfileGen from '../../assets/TeamProfileGenerator/teamgen.png'
import RetroRaid from '../../assets/RetroRaidSS.png'
import Weather from '../../assets/weather.png'
import WorkDay from '../../assets/workday.png'


function Project() {

    return (
        <Container fluid >
            <h1>Samples of Work Below</h1>
            <Row className="flex-row px-1 ">
                <Col>
                    <div className="with-margin">
                        <a href=" https://warm-coast-36738.herokuapp.com/">
                            <img className="project"
                            src={RetroRaid}
                            alt="Retro Raid Forum"
                            width="1000"
                            height="300"/>
                        </a>
                    </div>
                </Col>
                <Col>
                    <div className="with-margin">
                        <a href="https://ucf-photo-hut.herokuapp.com/">
                            <img className="project"
                            src={PhotoHut}
                            alt="PhotoHut Website"
                            width="500"
                            height="300"/>
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className="flex-row px-1">
                <Col>
                    <div className="with-margin">
                        <a href="https://jadavis30.github.io/plan-your-date-night/">
                            <img className="project"
                            src={DateNight}
                            alt="Plan Your Date Night Website"
                            width="600"
                            height="400"/>
                        </a>
                    </div>
                </Col>
                <Col>
                    <div className="with-margin">
                        <a href="https://github.com/jadavis30/team-profile-generator">
                            <img className="project"
                            src={ProfileGen}
                            alt="Team Profile HTML Generator"
                            width="500"
                            height="400"/>
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className="flex-row px-1">
            <Col>
                    <div className="with-margin">
                        <a href="https://jadavis30.github.io/weather/">
                            <img className="project"
                            src={Weather}
                            alt="Weather API"
                            width="550"
                            height="400"/>
                        </a>
                    </div>
                </Col>
                <Col>
                    <div className="with-margin">
                        <a href="https://jadavis30.github.io/workdayscheduler/">
                            <img className="project"
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