import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [shows, setShows] = useState({});
  const [query, setQuery] = useState("");
  const [showIsLoaded, setShowIsLoaded] = useState(false);

  console.log(shows);
  return (
    <Router>
      <div className="App">
        <Navigation
          shows={shows}
          setShows={setShows}
          query={query}
          setQuery={setQuery}
          setShowIsLoaded={setShowIsLoaded}
        />
        <div>
          <h1>Shows</h1>
          {showIsLoaded ? (
            shows.map((item) => {
              return <div>{item.show.name}</div>;
            })
          ) : (
            <div></div>
          )}
          <h2>The show: {shows.name}</h2>
          <h2>The query: {query}</h2>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
