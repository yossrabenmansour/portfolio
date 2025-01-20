import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg'
import './contact.css'

export default function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }
      const [formDetails,setFormDetails]=useState(formInitialDetails)
      const [buttonText,setButtonText]=useState('send')
      const [status,setStatus]=useState({})
      
      const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        try {
          let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
          });
    
          let result = await response.json();
          setFormDetails(formInitialDetails);
          setButtonText("Send");
    
          if (result.code === 200) {
            setStatus({ success: true, message: "Message sent successfully" });
          } else {
            setStatus({ success: false, message: "Something went wrong, please try again later." });
          }
        } catch (error) {
          setStatus({ success: false, message: "Network error, please try again." });
          setButtonText("Send");
        }
        
    }
  return (
    <section className='contact' id='contact'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                <img src={contactImg} alt='contact-img'/>
                </Col>
                <Col md={6}>
                <h2>Get In Touch </h2>
                <form onSubmit={handleSubmit} > 
                    <Row>
                        <Col sm={6} className='px-1'> 
                        <input type='text' value={formDetails.firstName} placeholder='First Name'  onChange={(e) => onFormUpdate('firstName', e.target.value)} /> </Col>
                        <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                    </Row>
                </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
