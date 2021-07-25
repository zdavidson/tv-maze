import "./SearchBar.scss";

const SearchBar = ({ center, setShows, query, setQuery, setShowIsLoaded }) => {
  // Search all shows
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;

  async function searchTVShows() {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setShows(result);
          setShowIsLoaded(true);
        });
    } catch (err) {
      console.error(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchTVShows();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit} id="search-bar">
      <input
        id={`search-input${center ? "-center" : ""}`}
        className="input"
        type="text"
        name="query"
        placeholder="Search TV Maze"
        value={query}
        onChange={handleChange}
      ></input>

      <button className="button" id="search-button" type="submit">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png"
          alt="magnifying-glass"
          id="magnifying-glass"
        />
      </button>
    </form>
  );
};

export default SearchBar;
