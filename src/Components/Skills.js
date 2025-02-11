import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'
import './skills.css'

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className="skill" id="skills">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="skill-bx wow zoomIn">
                    <h2>Skills</h2>
                    <p> Junior web developer with a strong foundation in HTML, CSS, JavaScript, and React. Skilled in creating responsive, dynamic, and user-friendly web applications.</p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={meter1} alt="html" />
                            <h5 > HTML5  CSS3  Bootstrap 5 </h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="React" />
                            <h5>React JS  JavaScript et Git/GitHub</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="back" />
                            <h5>Node JS express JS  MongoDB </h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="dev" />
                            <h5>Web Development</h5>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
    <img className="background-image-left" src={colorSharp} alt="e" />
</section>
  )
}
