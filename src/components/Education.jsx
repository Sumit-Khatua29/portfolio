import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            degree: "Bachelor of Engineering (CSE)",
            institution: "Chandigarh University, Mohali",
            year: "2020 - 2024",
            grade: "CGPA: 7.29",
            description: "Specialized in Computer Science with a focus on Data Analysis and Full Stack Development."
        },
        {
            degree: "Intermediate (ISC)",
            institution: "St. Paul's School, Rourkela",
            year: "2019 - 2020",
            grade: "Percentage: 74.8%",
            description: "Completed higher secondary education with a focus on Science and Mathematics."
        },
        {
            degree: "Matriculation (ICSE)",
            institution: "M.G.M English School, Rourkela",
            year: "2017 - 2018",
            grade: "Percentage: 78.9%",
            description: "Completed secondary education with distinction in Computer Applications."
        }
    ];

    return (
        <section id="education" className="py-5 position-relative" style={{ background: 'linear-gradient(to bottom, var(--bg-dark), var(--bg-gradient-1))' }}>
            <Container fluid className="px-5">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <h2 className="display-4 fw-bold text-center mb-5" style={{ color: 'var(--accent-cyan)' }}>Education</h2>
                    
                    <div className="position-relative mx-auto" style={{ maxWidth: '1200px' }}>
                        {/* Central Vertical Line (Visible only on Desktop) */}
                        <div className="position-absolute top-0 start-50 translate-middle-x h-100 d-none d-md-block" 
                             style={{ 
                                 width: '2px', 
                                 background: 'linear-gradient(to bottom, var(--accent-purple), var(--accent-cyan), transparent)',
                                 opacity: 0.6 
                             }}></div>

                        {education.map((edu, index) => {
                            // Layout Logic:
                            // Even Index (0, 2): Left Side Card. Dot should be on RIGHT side of line.
                            // Odd Index (1): Right Side Card. Dot should be on LEFT side of line.
                            
                            const isLeftCard = index % 2 === 0;

                            return (
                                <Row key={index} className={`mb-5 justify-content-center align-items-center ${!isLeftCard ? 'flex-row-reverse' : ''}`}>
                                    
                                    {/* Timeline Dot Removed */}

                                    {/* Content Column */}
                                    <Col md={5} className={`mb-4 mb-md-0 position-relative ${isLeftCard ? 'text-md-end' : 'text-md-start'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isLeftCard ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                        >
                                            <div className="glass-card p-4 position-relative hover-lift group border-0" 
                                                 style={{ 
                                                     borderRadius: '20px',
                                                     background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                                     border: '1px solid rgba(255, 255, 255, 0.1)'
                                                 }}>
                                                
                                                {/* Decorative Accent on Card's Outer Edge */}
                                                <div className={`position-absolute top-0 bottom-0 ${isLeftCard ? 'end-0' : 'start-0'}`} 
                                                     style={{ width: '4px', background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple))', opacity: 0.8 }}></div>

                                                <div className={`d-flex flex-column ${isLeftCard ? 'align-items-md-end' : 'align-items-md-start'}`}>
                                                     <span className="badge rounded-pill bg-transparent border border-secondary text-white fw-light mb-3 px-3 py-2">
                                                        {edu.year}
                                                     </span>
                                                     <h4 className="h4 fw-bold mb-1 text-white">{edu.degree}</h4>
                                                     <h5 className="h6 mb-3" style={{ color: 'var(--accent-cyan)' }}>{edu.institution}</h5>
                                                     
                                                     <div className="mb-3 px-3 py-1 rounded-pill" style={{ background: 'rgba(217, 70, 239, 0.1)', border: '1px solid var(--accent-pink)' }}>
                                                        <span className="fw-bold small" style={{ color: 'var(--accent-pink)' }}>{edu.grade}</span>
                                                     </div>

                                                    <p className="text-gray-400 mb-0 small opacity-75" style={{ maxWidth: '90%' }}>
                                                        {edu.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Col>
                                    
                                    {/* Empty Column for Spacing on Desktop */}
                                    <Col md={5} className="d-none d-md-block"></Col> 
                                </Row>
                            );
                        })}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Education;
