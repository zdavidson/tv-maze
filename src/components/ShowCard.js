import "./ShowCard.scss";
import show from "../assets/singleShowData";
import Container from "react-bootstrap/Container";

const ShowCard = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default ShowCard;
