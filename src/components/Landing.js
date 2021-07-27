import "./Landing.scss";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div id="landing">
      <Container>
        <div className="logo">
          <h1 id="logo">TV Maze</h1>
        </div>
        <div className="new-shows">
          <h2>Checkout some new shows:</h2>
          <div id="landing-images">
            <Link to="/shows/arrow">
              <img
                src="https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg"
                alt="show-poster"
              />
            </Link>
            <Link to="/shows/lost">
              <img
                src="https://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg"
                alt="show-poster"
              />
            </Link>
            <Link to="/shows/Person%20of%20Interest">
              <img
                src="https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg"
                alt="show-poster"
              />
            </Link>
            <Link to="/shows/bitten">
              <img
                src="https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg"
                alt="show-poster"
              />
            </Link>
          </div>
        </div>

        <h2>Or search for one:</h2>
      </Container>
    </div>
  );
};

export default Landing;
