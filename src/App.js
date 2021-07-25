import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState } from "react";

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
        <Main showIsLoaded={showIsLoaded} shows={shows} query={query} />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
