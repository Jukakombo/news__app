import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { sanityClient } from "./sanityClient";
import { FcAlarmClock } from "react-icons/fc";

export default function Card() {
  const [news, setNews] = useState([]);
  console.log(news);

  useEffect(() => {
    const query = `*[_type == "news"]{
      _createdAt,journalist,_id,details,title,paragraphe,image{
        asset->{url}
      }
    }`;
    sanityClient.fetch(query).then((data) => setNews(data));
  }, []);

  return (
    <div className="card-news">
      {news.map((x) => (
        <div className="cards_news" key={x._id}>
          <img className="news_image" src={x.image.asset.url} alt="news" />
          <h4>{x.title}</h4>
          <h6
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
            }}
          >
            Published by:{x.journalist} <FcAlarmClock size={15} />
            <span>{moment(x._createdAt).fromNow()}</span>
          </h6>
          <p>
            {x.paragraphe.substring(0, 90)}...
            <Link to={`/news-details/${x._id}`}>Read More</Link>
          </p>
        </div>
      ))}
    </div>
  );
}
