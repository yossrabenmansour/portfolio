import React, { useEffect, useState } from 'react'
import { Container , Nav, Navbar} from 'react-bootstrap'
import {  HashLink} from 'react-router-hash-link';
import { BrowserRouter as Router} from "react-router-dom";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


import './navbar.css'

export default function NavBar() {
    const [activeLink,setActiveLink]=useState('home')
    const [scrolled, setScrolled]=useState(false)
    useEffect (()=>{
        const onScroll =()=>{
            if (window.scrollY>50){
                setScrolled(true)
            }else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll",onScroll)
        return()=>window.removeEventListener("scroll",onScroll)
    },[])
    const onUpdateActiveLink=(value)=>{
        setActiveLink(value)
    }
  return (
    <Router>
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand >
        <img src={logo} alt='Logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={HashLink} to="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
        <Nav.Link as={HashLink} to="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
        <Nav.Link as={HashLink} to="#contact" className={activeLink === 'contact' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
        </Nav>
        <span className='Navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/yossra-benmansour/" target="_blank"  rel="noopener noreferrer"><img src={navIcon1} alt=''/></a>
                <a href='https://github.com/yossrabenmansour' target="_blank"  rel="noopener noreferrer"><img src={navIcon2} alt=''/></a>
                <a href='https://vercel.com/yossra-ben-mansours-projects' target="_blank"  rel="noopener noreferrer"><img src={navIcon3} alt=''/></a>
                
            </div>
            <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>     
          </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </Router>
  )
}
