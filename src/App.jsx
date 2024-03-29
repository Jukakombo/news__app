import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componnents/Home";
import About from "./componnents/About";
import Articles from "./componnents/Articles";
import Contact from "./componnents/Contact";
import Publish from "./componnents/Publish";
import NewsDetail from "./componnents/NewsDetail";
import Loading from "./componnents/Loading";
// import PublishNews from "./componnents/PublishNews";
import Register from "./componnents/Register";
import Dashboard from "./componnents/Dashboard";
import DasboardDetail from "./componnents/DasboardDetail";

function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 8000);
  }, []);

  return (
    <>
      {load ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/articles" element={<Articles />} />
            <Route exact path="/publish" element={<Publish />} />
            <Route exact path="/news-details/:id" element={<NewsDetail />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path={"/dashboard"} element={<Dashboard />}>
              <Route exact path="/dashboard/:id" element={<DasboardDetail />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
