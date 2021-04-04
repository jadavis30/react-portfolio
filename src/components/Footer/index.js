import React from 'react';
import GitHub from "../../assets/GitHub/GitHub-Mark-64px.png";
import LinkedIn from "../../assets/LinkedIn/LI-In-Bug.png";
import Twitter from "../../assets/Twitter/twitter-circle-blue.png";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Banner from '../../assets/headerbanner.jpg';


function Footer() {
    return (
        <Container fluid className="fixed-bottom" style={{ backgroundImage: `url(${ Banner })`}}>
            < Row className="flex-row px-1">
                <Col>
                    <a href="https://www.github.com/jadavis30">
                        <img className="thumbnail-logo" 
                        src={GitHub} 
                        alt="GitHub Profile Link"
                        />
                    </a>    
                </Col>
                <Col>
                <a href="https://www.linkedin.com/in/jared-davis-b871a0106/">
                    <img className="thumbnail-logo" 
                    src={LinkedIn} 
                    alt="LinkedIn Profile Link"/>
                </a>     
                </Col>
                <Col>
                <a href="https://www.twitter.com/JaredHDavis32">
                    <img className="thumbnail-logo" 
                    src={Twitter} 
                    alt="Twitter Profile Link"/>
                </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;