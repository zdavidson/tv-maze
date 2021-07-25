import "./Titles.scss";
import { Link } from "react-router-dom";

const Titles = ({ shows, showIsLoaded, display, setDisplay }) => {
  console.log(shows);
  return (
    <div id="titles">
      <h4 id="titles-header">Titles</h4>
      <div id="search-results">
        {showIsLoaded ? (
          shows.map((item) => {
            return (
              <div
                className="result-container"
                key={Math.floor(Math.random() * 10000)}
              >
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
                  onClick={() => setDisplay(!display)}
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
