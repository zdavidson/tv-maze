import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navigation = ({
  isOpen,
  setIsOpen,
  shows,
  setShows,
  query,
  setQuery,
  setShowIsLoaded,
  display,
  setDisplay,
}) => {
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

          <NavLink id="logo" to="/" onClick={() => setDisplay(!display)}>
            TV Maze
          </NavLink>

          <Nav id="nav-links" className="nav-links">
            <SearchBar
              shows={shows}
              setShows={setShows}
              query={query}
              setQuery={setQuery}
              setShowIsLoaded={setShowIsLoaded}
            />
          </Nav>
          <a id="tv-maze" href="https://www.tvmaze.com/api">
            API
          </a>
        </NavBar>
      </Container>
    </div>
  );
};

export default Navigation;
