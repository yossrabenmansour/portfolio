import { Col, Container, Row } from 'react-bootstrap';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import './footer.css'
export default function Footer() {
 

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col  size={12} sm={6} className="text-center text-sm-end">
            <p>Ben Mansour Yossra © | All rights reserved.</p>
          </Col>
          <Col size={12} sm={6} >
            <div className="social-icon"> 
              <a  href="https://www.linkedin.com/in/yossra-benmansour/"  target="_blank"  rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/yossrabenmansour" target="_blank"  rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a  href='https://vercel.com/yossra-ben-mansours-projects' target="_blank"  rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
              

            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
