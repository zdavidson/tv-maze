const SearchBar = () => {
  return (
    <form
      className="form"
      // onSubmit={searchMovies}
    >
      <input
        className="input"
        type="text"
        name="query"
        placeholder="Search TV Maze"
        // value={query}
        // onChange={(event) => setQuery(event.target.value)}
      ></input>
      <button className="button" type="submit">
        magnifying glass image
      </button>
    </form>
  );
};

export default SearchBar;
