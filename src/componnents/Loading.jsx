import React from "react";
import loading1 from "../assets/loading.svg";
function Loading() {
  return (
    <div className="loading">
      <img src={loading1} alt="LOADING" />
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading;
