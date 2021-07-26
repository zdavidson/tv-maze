import "./ShowCard.scss";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";

const ShowCard = ({ ...props }) => {
  const [show, setShow] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const showName = props.match.params.name;
  const url = `https://api.tvmaze.com/singlesearch/shows?q=${showName}`;

  // Search Single Show
  useEffect(() => {
    async function searchTVShow() {
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((result) => {
            setShow(result);
            setIsLoaded(true);
          });
      } catch (err) {
        console.error(err);
      }
    }
    searchTVShow();
  }, [url]);

  return (
    <Container>
      {isLoaded ? (
        <div id="show-card">
          <div id="show-image">
            <img src={show.image.original} alt="show-poster" />
          </div>
          <div id="show-info">
            <div id="show-title">
              <h1 id="name">{show.name}</h1>
              <div>
                <span id="rating"> {show.rating.average}</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1024px-Gold_Star.svg.png"
                  alt="stars"
                />
              </div>
            </div>

            <span id="genre">{show.genres[0]}</span>

            <p id="summary">{show.summary}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default ShowCard;
