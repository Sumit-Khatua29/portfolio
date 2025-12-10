import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

const Projects = () => {
    const projects = [
        {
            title: "DownTube",
            date: "May 2022",
            tech: ["Python", "Tkinter", "Pytube"],
            description: "Developed a GUI application for downloading YouTube videos with high resolution. Provides an intuitive interface for users to search and download videos directly to local storage."
        },
        {
            title: "Potato Plant Disease Detection",
            date: "Dec 2022",
            tech: ["CNN", "Machine Learning", "Image Processing"],
            description: "Designed a robust solution using CNN to detect diseases in potato plants. Analyzed about 5,600 images to accurately identify diseased plants, aiding farmers in early diagnosis."
        },
        {
            title: "Brain Tumour Detection",
            date: "Dec 2023",
            tech: ["Detectron2", "Machine Learning", "Python", "MRI Analysis"],
            description: "Developed a solution for brain tumor detection using Detectron 2. Leveraged MRI images to accurately identify and localize tumors to assist medical professionals in diagnosis and treatment planning."
        }
    ];

    return (
        <section id="projects" className="py-5 bg-dark" style={{ background: 'var(--bg-gradient-1)' }}>
            <Container fluid className="px-5">
                <SectionReveal>
                    <h2 className="display-4 fw-bold text-center mb-5" style={{ color: 'var(--accent-purple)' }}>Projects</h2>
                    
                    <Row className="g-4">
                        {projects.map((project, index) => (
                            <Col key={index} lg={4} md={6}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="h-100"
                                >
                                    <div className="glass-card h-100 d-flex flex-column overflow-hidden">
                                        <div className="p-4 border-bottom border-secondary" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                 <small className="text-uppercase tracking-wider" style={{ color: 'var(--accent-cyan)' }}>{project.date}</small>
                                                 <div className="d-flex gap-1">
                                                    <div className="rounded-circle" style={{width: '8px', height: '8px', background: 'var(--accent-pink)'}}></div>
                                                    <div className="rounded-circle" style={{width: '8px', height: '8px', background: 'var(--accent-purple)'}}></div>
                                                 </div>
                                            </div>
                                            <h3 className="h4 fw-bold text-white mb-0">{project.title}</h3>
                                        </div>
                                        
                                        <div className="p-4 flex-grow-1">
                                            <p className="text-gray-300 mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                                {project.description}
                                            </p>
                                            <div className="d-flex flex-wrap gap-2 mt-auto">
                                                {project.tech.map((tech, idx) => (
                                                    <Badge 
                                                        key={idx} 
                                                        bg="transparent" 
                                                        className="border px-2 py-1 fw-normal"
                                                        style={{ borderColor: 'var(--accent-purple)', color: 'var(--accent-cyan)' }}
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </SectionReveal>
            </Container>
        </section>
    );
};

export default Projects;
