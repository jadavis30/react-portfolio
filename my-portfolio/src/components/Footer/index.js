import React from 'react';
import GitHub from "../../assets/GitHub/Github-Mark-64px.png";
import LinkedIn from "../../assets/LinkedIn/In-Blue-Logo.png";
import Container from "react-bootstrap/Container";

function Footer() {
    return (
        <Container>
            <section row>
                <col>
                    <img src={GitHub}/>
                </col>
                <col>
                    <img src={LinkedIn}/> 
                </col>
                <col>
                    <a href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @JaredHDavis32</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </col>
            </section>
        </Container>
    );
}

export default Footer;