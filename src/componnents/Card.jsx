import React from "react";
import { Link } from "react-router-dom";

import { data } from "./database";

export default function Card() {
  return (
    <div className="card-news">
      {data.map((x) => (
        <div className="cards_news" key={x._id}>
          <img className="news_image" src={x.image} alt="news" />

          <p>
            {x.paragraphe_1.substring(0, 100)}...
            <Link to={`/news-details/${x._id}`}>Read More</Link>
          </p>
        </div>
      ))}
    </div>
  );
}
