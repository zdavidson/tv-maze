const SearchBar = ({ setShows, query, setQuery, setShowIsLoaded }) => {
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
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="Search TV Maze"
        value={query}
        onChange={handleChange}
      ></input>
      <button className="button" type="submit">
        magnifying glass image
      </button>
    </form>
  );
};

export default SearchBar;
