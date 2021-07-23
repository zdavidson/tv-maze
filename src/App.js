import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
