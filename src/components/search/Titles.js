import "./Titles.scss";
import { Link } from "react-router-dom";

const Titles = ({
  shows,
  showIsLoaded,
  display,
  setDisplay,
  setShowIsLoaded,
}) => {
  return (
    <div id="titles">
      <h4 id="titles-header">Titles</h4>
      <div id="search-results">
        {showIsLoaded ? (
          shows.map((item, itemIdx) => {
            return (
              <div className="result-container" key={itemIdx}>
                {item.show.image ? (
                  <img
                    src={item.show.image.medium}
                    alt="show-poster"
                    className="result-img"
                    key={item.id}
                  />
                ) : (
                  <img
                    src="https://freaklab.org/wp-content/uploads/2017/08/portrait-placeholder-grey.gif"
                    alt="show-poster-placeholder"
                    className="result-img placeholder-img"
                    key={item.id}
                  />
                )}

                <Link
                  className="show-link"
                  to="/showCard"
                  onClick={() => {
                    setDisplay(!display);
                    setShowIsLoaded(false);
                  }}
                >
                  {item.show.name}
                </Link>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Titles;
