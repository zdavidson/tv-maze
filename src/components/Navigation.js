import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navigation = ({ isOpen, setIsOpen }) => {
  return (
    <div className="navigation">
      <Container>
        <NavBar id="nav-bar">
          <div
            id="hamburger-icon"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></div>

          <NavLink id="logo" to="/">
            TV Maze
          </NavLink>

          <Nav id="nav-links" className="nav-links">
            <SearchBar />
          </Nav>
        </NavBar>
      </Container>
    </div>
  );
};

export default Navigation;
