import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import SectionReveal from './SectionReveal';

const Hero = () => {
    return (
        <section id="home" className="d-flex align-items-center min-vh-100 position-relative overflow-hidden" 
            style={{ 
                background: 'radial-gradient(circle at 50% 50%, rgba(159, 122, 234, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' 
            }}
        >
            <Container fluid className="px-5 position-relative" style={{ zIndex: 1, marginTop: '80px' }}>
                <Row className="justify-content-center align-items-center text-center">
                    <Col lg={10} className="mb-5 mb-md-0">
                        <SectionReveal>
                            <h2 className="h4 text-capitalize mb-3" style={{ color: 'var(--accent-cyan)', letterSpacing: '2px' }}>
                                Hello, It's Me
                            </h2>
                            <h1 className="display-1 fw-bold mb-4 text-white">
                                Sumit Khatua
                            </h1>
                            <div className="d-flex align-items-center justify-content-center gap-2 mb-5">
                                <h3 className="h1 text-white mb-0">I'm a</h3>
                                <h3 className="h1 mb-0" style={{ color: 'var(--accent-purple)' }}>
                                    <Typewriter
                                        options={{
                                            strings: ['Full Stack Java Developer', 'Java Expert', 'React Developer'],
                                            autoStart: true,
                                            loop: true,
                                            wrapperClassName: 'typewriter-text',
                                        }}
                                    />
                                </h3>
                            </div>
                            
                            <p className="lead mb-5 text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
                                Result-driven computer science student proficient in extracting, cleaning, and analyzing complex datasets to derive actionable insights.
                            </p>
                            
                            <div className="d-flex gap-3 justify-content-center">
                                <Button className="btn-primary" href="#contact">Contact Me</Button>
                                {/* Placeholder for Resume Download */}
                                <Button variant="outline-info" href="#">Download Resume</Button>
                            </div>
                        </SectionReveal>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
