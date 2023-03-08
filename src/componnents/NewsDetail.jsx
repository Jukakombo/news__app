import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "./database";
import Footer from "./Footer";
import Header from "./Header";
function NewsDetail() {
  const getNewsId = useParams();
  const { id } = getNewsId;
  const postNews = data.find((item) => item._id === id);
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
  return (
    <div>
      <Header />
      <>
        <div style={newsDetailImage}>
          <img style={imageStyles} src={postNews.image} alt="new Detail" />
          <p>{postNews.paragraphe_1}</p>
          <p>{postNews.paragraphe_2}</p>
          <p>{postNews.paragraphe_3}</p>
          <h1>Posted By: {postNews.journalist}</h1>
          <Link style={buttonStyles} to={"/"}>
            Browser more Articles
          </Link>
          <div className="" style={{ marginBottom: "25px" }}></div>
        </div>
      </>
      <Footer />
    </div>
  );
}

export default NewsDetail;
