import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Home=() =>{
  const [email, setEmail] = useState("");
  const [emailsList, setEmailsList] = useState(
    JSON.parse(localStorage.getItem("newsletterEmails")) || []
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && !emailsList.includes(email)) {
      const updatedList = [...emailsList, email];
      setEmailsList(updatedList);
      localStorage.setItem("newsletterEmails", JSON.stringify(updatedList));
      setEmail("");
      alert("Email ajouté avec succès !");
    } else {
      alert("Veuillez entrer un email valide ou l'email existe déjà.");
    }
  };

  return (
    <div className="page-container">
   
    <nav>
      <ul className="navigation">
        <li>
          <Link to="/details">About This Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>

    
    <main className="main-content">
      <h1>Welcome to My React Project</h1>
      <p>Explore various styling techniques and design elements implemented in this portfolio.</p>
      <p>Modification Amira</p>
      <button
        className="learn-more"
        onClick={() => alert("Let's dive into the details!")}
      >
        Learn More
      </button>
    </main>
    <footer className="footer">
    <div className="footer-section ">
            <h3><strong>Contact Us:</strong></h3>
            <br />
            +216 53 013 518 
            <br />
           <a href='https://mail.google.com/mail/u/0/'>yossrabenmansour53@gmail.com</a>

        </div>
       <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href='http://localhost:3000/details'>About Us</a></li>
            <li><a href='http://localhost:3000/details'>More Search</a></li>
            <li><a href='http://localhost:3000/details' >Blog</a></li>
          
          </ul>
        </div>
    
    <section className="social-links">
        <h3>Follow Us</h3>
        <div className="icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
    </section>
        
     
    <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="submit">
          Sign Up
        </button>
      </form>
    </footer>
  </div>
    
  )
}
export default Home
