import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import './DoctorsPage.css';
import './Auth.css';

import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import heroImg from './assets/hero-placeholder.png';
import blogImg1 from './assets/blog-placeholder1.png';
import blogImg2 from './assets/blog-placeholder2.png';
import blogImg3 from './assets/blog-placeholder3.png';
import techImg from './assets/tech-placeholder.png';
import patient1Img from './assets/patient-placeholder1.png';
import patient2Img from './assets/patient-placeholder2.png';
import patient3Img from './assets/patient-placeholder3.png';
import partner1Logo from './assets/logo-placeholder1.png';
import partner2Logo from './assets/logo-placeholder2.png';
import partner3Logo from './assets/logo-placeholder3.png';
import partner4Logo from './assets/logo-placeholder4.png';
import partner5Logo from './assets/logo-placeholder5.png';
import brandLogo from './assets/brand-logo.png';

function HomePage() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  
  const initials = user?.name
    ? user.name
        .split(' ')
        .map(word => word[0])
        .join('')
        .substring(0, 2)
        .toUpperCase()
    : '';

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={brandLogo} alt="Logo" className="logo-img" />
          <h1>MedConnect</h1>
        </div>
        <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/doctors">Doctors</Link></li>
  <li><Link to="/appointment-confirmation">My Appointment</Link></li>
  <li><Link to="/health-checkups">Health Checkup</Link></li>

  <li><a href="#blog">Blog</a></li>
  <li><a href="#about-us">About Us</a></li>
</ul>

        {initials ? (
          <div className="auth-box">
            <span className="user-initials">{initials}</span>
            <button className="sign-up-btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/signup"><button className="sign-up-btn">Sign Up</button></Link>
        )}
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-left">
          <h2>Find your doctor and<br />make an appointment</h2>
          <p>
            MedConnect is your comprehensive healthcare companion, bridging the gap between patients and medical professionals through online scheduling, telemedicine, and personalized healthcare management.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="hero-right">
          <img src={heroImg} alt="Hero section" />
        </div>
      </header>

      {/* Health Blogs */}
      <section className="health-blogs" id="blog">
        <h2>Health Blogs</h2>
        <p>Explore the latest articles about medical breakthroughs, healthy lifestyles, and more.</p>
        <div className="blog-cards">
          <div className="blog-card">
            <img src={blogImg1} alt="Blog 1" />
            <h3>Blurry Vision</h3>
            <p>Discover how advanced treatments are revolutionizing eye care.</p>
            <button>Read More</button>
          </div>
          <div className="blog-card">
            <img src={blogImg2} alt="Blog 2" />
            <h3>Panic Attacks</h3>
            <p>Delve into the world of rare diseases and breakthroughs in research.</p>
            <button>Read More</button>
          </div>
          <div className="blog-card">
            <img src={blogImg3} alt="Blog 3" />
            <h3>Heat Stroke</h3>
            <p>Understand Heat Stroke cause, symptoms, and treatment.</p>
            <button>Read More</button>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="tech-section" id="services">
  <div className="tech-text">
    <h2>Edge Technology with HyperAIa</h2>
    <p>
      <strong>MedConnect Health</strong> offers advanced <strong>radiology</strong>, <strong>cardiology</strong>, <strong>cancer treatment</strong>, <strong>prosthetic solutions</strong>, <strong>robotic surgery</strong>, and more. By integrating cutting-edge <strong>HyperAIa</strong> technology, we optimize diagnoses and elevate patient outcomes through intelligent, data-driven care.
    </p>
    <ul>
      <li><strong>High-precision imaging</strong> for early and accurate detection of complex conditions</li>
      <li><strong>Low-dose radiation</strong> protocols to ensure patient safety without compromising image quality</li>
      <li><strong>Seamless patient experience</strong> with smart appointment scheduling, telemedicine, and instant access to medical records</li>
      <li><strong>Enhanced diagnostic accuracy</strong> with AI-powered decision support tools that assist healthcare providers</li>
      <li><strong>Minimally invasive robotic procedures</strong> offering quicker recovery and reduced complications</li>
    </ul>
  </div>
  <div className="tech-image">
    <img src={techImg} alt="Advanced Technology" />
  </div>
</section>


      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Patient Says</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src={patient1Img} alt="Patient Jane" />
            <h3>Jane Smith</h3>
            <p>
              “MedConnect made it easy to schedule my appointments and track my health records. It’s a game-changer for busy people.”
            </p>
          </div>
          <div className="testimonial-card">
            <img src={patient2Img} alt="Patient Michael" />
            <h3>Shilvi Johnson</h3>
            <p>
              “Thanks to MedConnect, I found the perfect doctor and booked a video consultation without leaving my home.”
            </p>
          </div>
          <div className="testimonial-card">
            <img src={patient3Img} alt="Patient Lisa" />
            <h3>Lisa Hernandez</h3>
            <p>
              “Their HyperAIa technology is incredible. My treatment was faster and with fewer side effects than I ever expected.”
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners">
        <h2>Our Partners</h2>
        <div className="partners-logos">
          <img src={partner1Logo} alt="Partner 1" />
          <img src={partner2Logo} alt="Partner 2" />
          <img src={partner3Logo} alt="Partner 3" />
          <img src={partner4Logo} alt="Partner 4" />
          <img src={partner5Logo} alt="Partner 5" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MedConnect | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default HomePage;
