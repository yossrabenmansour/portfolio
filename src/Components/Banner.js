import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import headerImg from '../assets/img/header-img.svg'
export default function Banner() {
    const[loopNumb,setLoopNumb]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false)
    const [delta, setDelta]=useState (300- Math.random(0)*100);
    const toRotate=["Web Developper" , "Full-Stack Developper "]
    const [text, setText]=useState('')
    const period=2000;

    useEffect(()=>{
        let ticker =setInterval(()=>{
            tick ();
        },delta)
        return()=>{clearInterval(ticker)} 
    })
    const tick = () => {
        let i = loopNumb % toRotate.length; // Get the index for the array
        let fullText = toRotate[i]; // Access the string from the array using the index
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNumb(loopNumb + 1);
            setDelta(500);
        }
    }
  return (
    <section className="banner ">
  <Container>
    <Row className="align-items-center text-center">
      <Col xs={12} md={6} xl={7}>
        <span className="tagline font-bold tracking-wider py-8px px-10px text-xl mb-16  inline-block">
          Welcome to my portfolio
        </span>
        <h1 className="text-6xl	 font-bold tracking-wider  leading-none	 mb-20">
          {"Hi I'm Ben Mansour Yossra "}
          <span className="wrap">{text}</span>
        </h1>
        <p>
          Junior web developer passionate about creating responsive and user-friendly interfaces. Always learning and ready for new challenges!
        </p>
        <button
          onClick={() => console.log("let's connect")}
        >
          Let's Connect<i class="bi bi-arrow-right-circle"></i>
        </button>
      </Col>
      <Col xs={12} md={6} xl={5}>
        <img src={headerImg} alt="header img" className="animate-updown" />
      </Col>
    </Row>
  </Container>
</section>

  )
}
