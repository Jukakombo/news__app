import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import Footer from "./Footer";
import Header from "./Header";
import moment from "moment";
import { sanityClient } from "./sanityClient";
import { FcAlarmClock } from "react-icons/fc";
function NewsDetail() {
  const { id } = useParams();

  const [newsDetails, setNewsDetails] = useState([]);

  useEffect(() => {
    const query = `*[_id == "${id}"]{
      _createdAt,journalist,_id,details,title,paragraphe,image{
        asset->{url}
      }
    }`;
    sanityClient.fetch(query).then((data) => setNewsDetails(data));
  }, []);

  const newsDetailImage = {
    width: "90%",
    height: "45%",
    margin: "auto",
  };
  const imageStyles = {
    width: "100%",
  };
  const buttonStyles = {
    backgroundColor: "red",
    padding: "20px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "15px",
    textAlign: "center",
  };
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
  return (
    <div>
      <Header />
      <>
        {newsDetails.map((x) => (
          <div style={newsDetailImage}>
            <img style={imageStyles} src={x.image.asset.url} alt="new Detail" />
            <p>{x.paragraphe}</p>
            <BlockContent blocks={x.details} serializers={serializers} />
            <div
              className="journalist"
              style={{ display: "flex", alignItems: "center" }}
            >
              <h1>Posted By: {x.journalist}</h1>{" "}
              <div
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FcAlarmClock size={30} />
                {moment(x._createdAt).fromNow()}
              </div>
            </div>
            <Link style={buttonStyles} to={"/"}>
              Browser more Articles
            </Link>
            <div className="" style={{ marginBottom: "25px" }}></div>
          </div>
        ))}
      </>
      <Footer />
    </div>
  );
}

export default NewsDetail;
