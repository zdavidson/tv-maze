import "./Footer.scss";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <div id="footer-container">
          <div id="footer-text">
            <NavLink id="logo" to="/" target="_top">
              TV Maze
            </NavLink>

            <p>
              TV Maze is a simple SPA for finding all of the latest info about
              your favorite TV shows.
            </p>
          </div>
          <div id="footer-links">
            <NavBar>
              <Nav id="footer-nav" className="nav-links"></Nav>
            </NavBar>
            <div id="social-links">
              <a href="/" alt="" className="social-link">
                <img src="./assets/icon-facebook.svg" alt="facebook-link" />
              </a>
              <a href="/" alt="" className="social-link">
                <img src="./assets/icon-twitter.svg" alt="twitter-link" />
              </a>
              <a href="/" alt="" className="social-link">
                <img src="./assets/icon-instagram.svg" alt="instagram-link" />
              </a>
            </div>
          </div>
        </div>
        <p>Copyright 2021. All Rights Reserved</p>
      </Container>
    </div>
  );
};

export default Footer;
