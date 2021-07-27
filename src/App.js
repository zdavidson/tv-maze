import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/Footer";
import Results from "./components/search/Results";
import Landing from "./components/Landing";
import ShowCard from "./components/ShowCard";
import SearchBar from "./components/shared/SearchBar";
import { Container } from "react-bootstrap";

const App = () => {
  const [shows, setShows] = useState({});
  const [query, setQuery] = useState("");
  const [showIsLoaded, setShowIsLoaded] = useState(false);

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

        <Route
          exact
          path="/"
          render={() => {
            const center = true;
            return (
              <>
                <Landing />
                <Container>
                  <SearchBar
                    center={center}
                    setShows={setShows}
                    query={query}
                    setQuery={setQuery}
                    setShowIsLoaded={setShowIsLoaded}
                  />
                </Container>
              </>
            );
          }}
        />

        <Route
          exact
          path="/search/:query"
          render={() => (
            <Results shows={shows} showIsLoaded={showIsLoaded} query={query} />
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
