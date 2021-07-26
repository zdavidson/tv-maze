import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navigation = ({
  shows,
  setShows,
  query,
  setQuery,
  setShowIsLoaded,
  display,
  setDisplay,
  showCardView,
  setShowCardView,
}) => {
  return (
    <div className="navigation">
      <Container>
        <NavBar id="nav-bar">
          <NavLink id="logo" to="/">
            TV Maze
          </NavLink>

          <Nav id="nav-links" className="nav-links">
            <SearchBar
              shows={shows}
              setShows={setShows}
              query={query}
              setQuery={setQuery}
              setShowIsLoaded={setShowIsLoaded}
              display={display}
              setDisplay={setDisplay}
              showCardView={showCardView}
              setShowCardView={setShowCardView}
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
