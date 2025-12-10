import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

const About = () => {
    return (
        <section id="about" className="py-5" style={{ background: 'var(--bg-dark)' }}>
            <Container fluid className="px-5">
                <SectionReveal>
                    <h2 className="display-4 fw-bold text-center mb-5" style={{ color: 'var(--accent-purple)' }}>About Me</h2>
                    
                    <Row className="mb-5 align-items-center justify-content-center">
                        <Col md={5} className="text-center mb-4 mb-md-0">
                             <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                             >
                                <div className="position-relative d-inline-block">
                                    {/* Glowing backdrop */}
                                    <div className="position-absolute top-50 start-50 translate-middle rounded-circle" style={{
                                        width: '320px',
                                        height: '320px',
                                        background: 'linear-gradient(45deg, var(--accent-purple), var(--accent-cyan))',
                                        filter: 'blur(50px)',
                                        opacity: 0.3,
                                        zIndex: -1,
                                    }}></div>
                                    
                                    <Image 
                                        src="/Professional image.jpg" 
                                        roundedCircle 
                                        className="border border-2 border-secondary shadow-lg"
                                        style={{ 
                                            width: '300px', 
                                            height: '300px', 
                                            objectFit: 'cover',
                                            borderColor: 'rgba(255,255,255,0.1)'
                                        }}
                                        alt="Sumit Khatua"
                                    />
                                </div>
                            </motion.div>
                        </Col>
                        <Col md={7} lg={6}>
                            <h3 className="h3 fw-bold mb-3 text-white">Full Stack Java Developer</h3>
                            <p className="lead text-gray-300 mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                I am a result-driven computer science student from Chandigarh University with a strong background 
                                in statistical analysis and data visualization. I am proficient in extracting, cleaning, and 
                                analyzing complex datasets to derive actionable insights. My technical expertise spans Python, 
                                R, SQL, and Full Stack Development. I am dedicated to continuous learning and solving analytical problems.
                            </p>
                        </Col>
                    </Row>
                </SectionReveal>
            </Container>
        </section>
    );
};

export default About;
