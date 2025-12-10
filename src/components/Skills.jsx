import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

const Skills = () => {
    const technicalSkills = [
        "Java", "Python", "SQL", "HTML", "CSS", "JavaScript", 
        "C++", "DSA", "DBMS", "Machine Learning", 
        "Tableau", "Power BI", "MS-Excel", "MS-Office"
    ];

    const interpersonalSkills = [
        "Good Communication", "Loyal", "Listening Skills", 
        "Time Management", "Decision Making", "Coordination"
    ];

    const SkillBadge = ({ skill, color }) => (
        <motion.div
            whileHover={{ scale: 1.1, boxShadow: `0 0 15px ${color}` }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-4 py-2 rounded-pill m-2 glass-card d-inline-block cursor-pointer"
            style={{ 
                border: `1px solid ${color}`,
                color: '#fff',
                background: 'rgba(255,255,255,0.03)'
            }}
        >
            {skill}
        </motion.div>
    );

    return (
        <section id="skills" className="py-5 position-relative">
             <div className="position-absolute top-0 end-0 w-100 h-100" style={{
                background: 'radial-gradient(circle at 10% 90%, rgba(0, 240, 255, 0.05) 0%, rgba(0, 0, 0, 0) 50%)',
                zIndex: -1
            }}></div>
            <Container fluid className="px-5">
                <SectionReveal>
                    <h2 className="display-4 fw-bold text-center mb-5" style={{ color: 'var(--accent-cyan)' }}>Skills</h2>
                    
                    <Row className="justify-content-center gy-5">
                        <Col md={6}>
                            <h3 className="h4 text-center mb-4 text-uppercase text-white tracking-widest">Technical Skills</h3>
                            <div className="d-flex flex-wrap justify-content-center">
                                {technicalSkills.map((skill, index) => (
                                    <SkillBadge key={index} skill={skill} color="var(--accent-purple)" />
                                ))}
                            </div>
                        </Col>
                        
                        <Col md={6}>
                            <h3 className="h4 text-center mb-4 text-uppercase text-white tracking-widest">Interpersonal Skills</h3>
                             <div className="d-flex flex-wrap justify-content-center">
                                {interpersonalSkills.map((skill, index) => (
                                    <SkillBadge key={index} skill={skill} color="var(--accent-pink)" />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </SectionReveal>
            </Container>
        </section>
    );
};

export default Skills;
