import "./Titles.scss";

const Titles = ({ shows, showIsLoaded }) => {
  return (
    <div id="titles">
      <h4 id="titles-header">Titles</h4>
      <div id="search-results">
        {showIsLoaded ? (
          shows.map((item) => {
            return (
              <div class="result-container">
                {item.show.image ? (
                  <img
                    src={item.show.image.medium}
                    alt="show-poster"
                    class="result-img"
                  />
                ) : (
                  <img
                    src="https://freaklab.org/wp-content/uploads/2017/08/portrait-placeholder-grey.gif"
                    alt="show-poster-placeholder"
                    class="result-img placeholder-img"
                  />
                )}

                <a class="show-link" href={item.show.url}>
                  {item.show.name}
                </a>
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
