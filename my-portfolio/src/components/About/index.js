import React from 'react';
import profileImage from "../../assets/profile/profileimage.jpg";
import Image from 'react-bootstrap/Image';


function About() {
    return (
        <section>
            <Image src={profileImage} roundedCircle />
            <p>
                A graduate of Florida State University, I've spent the last 11 years working in public, private, and charter school systems in instructional and leadership roles. 
                As technologies have moved from overhead projectors to 1:1 tablets, I've immersed myself in what works for kids, and what frustrates teachers.
                As the pandemic restructured what school meant for many, I started to learn web development as a way to fully engage online learners and build systems that work.
                If you'd like to learn more about my projects and what I have developing, please follow me on GitHub or follow the Contact page above to reach out directly!
                I look forward to hearing from you!
            </p>
        </section>
    );
}

export default About;