import React from 'react';
import GitHub from "../../assets/GitHub/GitHub-Mark-64px.png";
import LinkedIn from "../../assets/LinkedIn/In-Blue-Logo.png.original.png";
import Twitter from "../../assets/Twitter/twitter-circle-blue.png";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function Footer() {
    return (
        <Container>
            < Row>
                <Col>
                    <img src={GitHub} alt="GitHub Profile Link"/>
                </Col>
                <Col>
                    <img src={LinkedIn} alt="LinkedIn Profile Link"/> 
                </Col>
                <Col>
                    <img src={Twitter} alt="Twitter Profile Link"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;