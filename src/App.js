import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/Footer";
import Results from "./components/search/Results";
import { useState } from "react";
import Landing from "./components/Landing";
import ShowCard from "./components/ShowCard";

const App = () => {
  const [shows, setShows] = useState({});
  const [query, setQuery] = useState("");
  const [showIsLoaded, setShowIsLoaded] = useState(false);
  const [display, setDisplay] = useState(true);
  const [showCardView, setShowCardView] = useState(false);

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
          showCardView={showCardView}
          setShowCardView={setShowCardView}
        />

        <Route
          exact
          path="/"
          render={(props) => (
            <Landing
              {...props}
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
        />

        <Route
          exact
          path="/search/:query"
          render={(props) => (
            <Results
              {...props}
              shows={shows}
              showIsLoaded={showIsLoaded}
              setShows={setShows}
              query={query}
              setQuery={setQuery}
              setShowIsLoaded={setShowIsLoaded}
              display={display}
              setDisplay={setDisplay}
            />
          )}
        />

        <Route
          exact
          path="/shows/:name"
          render={(props) => <ShowCard {...props} />}
        />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
