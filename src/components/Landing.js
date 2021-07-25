import "./Landing.scss";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Landing = ({
  query,
  setShows,
  setQuery,
  setShowIsLoaded,
  display,
  setDisplay,
}) => {
  const center = true;

  return (
    <>
      {display ? (
        <div id="landing">
          <Container>
            <div className="logo">
              <h1 id="logo">TV Maze</h1>
            </div>
            <div className="new-shows">
              <h2>Checkout some new shows:</h2>
              <div id="landing-images">
                <Link to="/showCard" onClick={() => setDisplay(!display)}>
                  <img
                    src="https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg"
                    alt="show-poster"
                  />
                </Link>
                <Link to="/showCard" onClick={() => setDisplay(!display)}>
                  <img
                    src="https://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg"
                    alt="show-poster"
                  />
                </Link>
                <Link to="/showCard" onClick={() => setDisplay(!display)}>
                  <img
                    src="https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg"
                    alt="show-poster"
                  />
                </Link>
                <Link to="/showCard" onClick={() => setDisplay(!display)}>
                  <img
                    src="https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg"
                    alt="show-poster"
                  />
                </Link>
              </div>
            </div>

            <h2>Or search for one:</h2>
            <SearchBar
              center={center}
              setShows={setShows}
              query={query}
              setQuery={setQuery}
              setShowIsLoaded={setShowIsLoaded}
            />
          </Container>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Landing;
