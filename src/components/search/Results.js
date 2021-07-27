import "./Results.scss";
import Titles from "./Titles";

const Results = ({ showIsLoaded, query, shows }) => {
  return (
    <div id="results-container">
      <div id="results">
        <span id="results-header">
          Results for <strong id="query-name">"{query}"</strong>
        </span>
        <Titles shows={shows} showIsLoaded={showIsLoaded} />
      </div>
    </div>
  );
};

export default Results;
