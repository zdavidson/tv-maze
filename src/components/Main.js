import "./Main.scss";
import Container from "react-bootstrap/Container";
import Titles from "./Titles";

const Main = ({ query, shows, showIsLoaded }) => {
  return (
    <Container>
      <div id="main">
        <div id="results">
          <span id="results-header">
            Results for <strong id="query-name">"{query}"</strong>
          </span>
          <Titles shows={shows} showIsLoaded={showIsLoaded} />
        </div>
      </div>
    </Container>
  );
};

export default Main;
