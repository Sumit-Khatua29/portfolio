import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const onScroll = () => {
             if (window.scrollY > 50) {
                 setScrolled(true);
             } else {
                 setScrolled(false);
             }

             // Robust ScrollSpy Logic
             const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
             let current = 'home'; // Default to home

             for (const section of sections) {
                 const element = document.getElementById(section);
                 if (element) {
                     const rect = element.getBoundingClientRect();
                     // Check if section top is near the viewport top or within viewport
                     // Use a threshold relative to window height for better accuracy on mobile
                     const threshold = window.innerHeight * 0.3; 
                     if (rect.top <= threshold && rect.bottom >= threshold) {
                         current = section;
                     }
                 }
             }
             setActiveSection(current);
        }

        window.addEventListener("scroll", onScroll);
        // Trigger once on mount to set initial state
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

  return (
    <Navbar 
        expand="lg" 
        fixed="top" 
        className={scrolled ? "glass-card m-2 mt-2 px-3 transition-all duration-300" : "bg-transparent py-4 transition-all duration-300"}
        variant="dark"
        style={{ transition: 'all 0.3s ease-in-out' }}
    >
      <Container fluid className="px-5">
        <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center">
            <span style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem', marginRight: '5px' }}>{'<'}</span>
            <span className="text-white tracking-widest">SUMIT</span>
            <span style={{ color: 'var(--accent-purple)', fontSize: '1.5rem', marginLeft: '5px' }}>{'/>'}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <Nav.Link 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className={`mx-2 position-relative link-hover px-2`}
                    style={{ 
                        fontWeight: activeSection === item.toLowerCase() ? '600' : '400',
                        color: activeSection === item.toLowerCase() ? '#fff' : 'rgba(255,255,255,0.7)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    {item}
                    {/* Animated Underline */}
                    <span className="position-absolute bottom-0 start-50 translate-middle-x" style={{
                        width: activeSection === item.toLowerCase() ? '100%' : '0%',
                        height: '2px',
                        background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-purple))',
                        borderRadius: '2px',
                        transition: 'width 0.3s ease',
                        bottom: '-5px'
                    }}></span>
                </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
