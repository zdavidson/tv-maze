import "./Results.scss";
import Titles from "./Titles";

const Results = ({
  showIsLoaded,
  query,
  shows,
  display,
  setDisplay,
  setShowIsLoaded,
}) => {
  return (
    <div id="results-container">
      <div id="results">
        <span id="results-header">
          Results for <strong id="query-name">"{query}"</strong>
        </span>
        <Titles
          shows={shows}
          showIsLoaded={showIsLoaded}
          display={display}
          setDisplay={setDisplay}
          setShowIsLoaded={setShowIsLoaded}
        />
      </div>
    </div>
  );
};

export default Results;
