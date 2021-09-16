import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

function Carousel(props) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;
  const goBackward = () => setCardIdx(cardIdx - 1);
  const goForward = () => setCardIdx(cardIdx + 1);
  const firstPic = cardIdx === 0;
  const lastPic = cardIdx === 2;

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <i
        className={`fas fa-chevron-circle-left fa-2x ${
          firstPic ? "hidden" : ""
        }`}
        onClick={goBackward}
        data-testid="left-arrow"
      />
      ;
      <div className="Carousel-main">
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <i
          className={`fas fa-chevron-circle-right fa-2x ${
            lastPic ? "hidden" : ""
          }`}
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash",
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash",
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash",
    },
  ],
  title: "Shells from far away beaches.",
};

export default Carousel;