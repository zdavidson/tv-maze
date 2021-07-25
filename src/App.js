import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Results from "./components/Results";
import { useState } from "react";
import Landing from "./components/Landing";
import ShowCard from "./components/ShowCard";

const App = () => {
  const [shows, setShows] = useState({});
  const [query, setQuery] = useState("");
  const [showIsLoaded, setShowIsLoaded] = useState(false);
  const [display, setDisplay] = useState(true);

  return (
    <Router>
      <div className="App">
        <Navigation
          shows={shows}
          setShows={setShows}
          query={query}
          setQuery={setQuery}
          setShowIsLoaded={setShowIsLoaded}
          display={display}
          setDisplay={setDisplay}
        />

        {showIsLoaded ? (
          <Results
            shows={shows}
            showIsLoaded={showIsLoaded}
            setShows={setShows}
            query={query}
            setQuery={setQuery}
            setShowIsLoaded={setShowIsLoaded}
            display={display}
            setDisplay={setDisplay}
          />
        ) : (
          <Landing
            showIsLoaded={showIsLoaded}
            shows={shows}
            query={query}
            setShows={setShows}
            setQuery={setQuery}
            setShowIsLoaded={setShowIsLoaded}
            display={display}
            setDisplay={setDisplay}
          />
        )}

        <Route exact path="/showCard" component={ShowCard} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
