import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import SectionReveal from './SectionReveal';

const Contact = () => {
    return (
        <footer id="contact" className="py-5 position-relative overflow-hidden" 
            style={{ 
                background: 'linear-gradient(to top, var(--bg-dark), var(--bg-gradient-2))',
                borderTop: '1px solid rgba(255,255,255,0.05)'
            }}
        >
             {/* Background Glow */}
             <div className="position-absolute bottom-0 start-50 translate-middle-x rounded-circle" style={{
                width: '600px',
                height: '300px',
                background: 'var(--accent-purple)',
                filter: 'blur(120px)',
                opacity: 0.1,
                zIndex: 0
            }}></div>

            <Container fluid className="px-5 position-relative" style={{ zIndex: 1 }}>
                <SectionReveal>
                    <Row className="justify-content-center text-center mb-5">
                        <Col md={8}>
                            <h2 className="display-4 fw-bold mb-4" style={{ color: 'var(--accent-cyan)' }}>Get In Touch</h2>
                            <p className="lead text-secondary mb-5">
                                Feel free to reach out for collaborations or just a friendly hello.
                            </p>
                        </Col>
                    </Row>

                    <Row className="justify-content-center g-4 mb-5">
                        <Col md={3} sm={6} className="text-center">
                            <motion.div whileHover={{ scale: 1.1 }} className="mb-3 d-inline-block p-3 rounded-circle glass-card">
                                <FaEnvelope size={24} style={{ color: 'var(--accent-pink)' }} />
                            </motion.div>
                            <h5 className="mb-2 text-white">Email</h5>
                            <a href="mailto:sumitrkl2002@gmail.com" className="text-white-50 text-decoration-none hover-text-white transition">
                                sumitrkl2002@gmail.com
                            </a>
                        </Col>
                        <Col md={3} sm={6} className="text-center">
                            <motion.div whileHover={{ scale: 1.1 }} className="mb-3 d-inline-block p-3 rounded-circle glass-card">
                                <FaLinkedin size={24} style={{ color: 'var(--accent-cyan)' }} />
                            </motion.div>
                            <h5 className="mb-2 text-white">LinkedIn</h5>
                            <a href="https://linkedin.com/in/sumit-khatua-b46959216/" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none hover-text-white transition">
                                View Profile
                            </a>
                        </Col>
                        <Col md={3} sm={6} className="text-center">
                             <motion.div whileHover={{ scale: 1.1 }} className="mb-3 d-inline-block p-3 rounded-circle glass-card">
                                <FaPhoneAlt size={24} style={{ color: 'var(--accent-purple)' }} />
                            </motion.div>
                            <h5 className="mb-2 text-white">Phone</h5>
                            <p className="mb-0 text-white-50">+91 8260655912</p>
                        </Col>
                        <Col md={3} sm={6} className="text-center">
                             <motion.div whileHover={{ scale: 1.1 }} className="mb-3 d-inline-block p-3 rounded-circle glass-card">
                                <FaMapMarkerAlt size={24} style={{ color: 'var(--accent-cyan)' }} />
                            </motion.div>
                            <h5 className="mb-2 text-white">Address</h5>
                            <p className="mb-0 text-white-50">Rourkela, Odisha - 769014</p>
                        </Col>
                    </Row>

                    <div className="text-center pt-4 border-top border-secondary" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                        <p className="mb-0 text-white-50" style={{ fontSize: '0.9rem' }}>
                            Designed & Built by <span style={{ color: 'var(--accent-purple)' }}>Sumit Khatua</span>
                        </p>
                    </div>
                </SectionReveal>
            </Container>
        </footer>
    );
};

export default Contact;
