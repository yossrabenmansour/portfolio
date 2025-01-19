import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import headerImg from '../assets/img/header-img.svg'
export default function Banner() {
    const[loopNumb,setLoopNumb]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false)
    const [delta, setDelta]=useState (300- Math.random(0)*100);
    const toRotate=["Web Developper" , "UX/UI Designer"]
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
    <section
  className="banner relative mt-0 pt-[260px] pb-[100px] bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('./assets/img/banner-bg.png')" }}  // Vous devez toujours utiliser `style` pour l'image de fond
>
  <Container>
    <Row className="align-items-center">
      <Col xs={12} md={6} xl={7}>
        <span className="tagline font-bold tracking-[0.8px] py-[8px] px-[10px] bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] text-white border border-white/[0.5] text-[20px] mb-[16px] inline-block">
          Welcome to my portfolio
        </span>
        <h1 className="text-[65px] font-bold tracking-[0.8px] leading-none mb-[20px]">
          {"Hi I'm Ben Mansour Yossra "}
          <span className="wrap">{text}</span>
        </h1>
        <p className="text-[#B8B8B8] text-[18px] tracking-[0.8px] leading-[1.5em] w-[96%]">
          Junior web developer passionate about creating responsive and user-friendly interfaces. Always learning and ready for new challenges!
        </p>
        <button
          onClick={() => console.log("let's connect")}
          className="text-white font-bold text-[20px] mt-[60px] flex items-center"
        >
          Let's Connect <i className="bi bi-arrow-right-circle text-[25px] ml-[10px] transition-all duration-300 ease-in-out hover:ml-[25px]"></i>
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
