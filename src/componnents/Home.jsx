import React from "react";
import Header from "./Header";
import Homepage from "./Homepage";

import NewsCards from "./NewsCards";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";

export default function Home() {
  return (
    <div>
      <Header />
      <ImageSlider />
      {/* <Homepage /> */}
      <NewsCards />
      <Footer />
    </div>
  );
}
