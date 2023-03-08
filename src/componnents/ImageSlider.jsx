import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import Carousel from "react-slider-responsive";
const Slider = () => {
  <Carousel>
    <div>
      <img src={pic1} alt="" />
    </div>
    <div>
      <img src={pic2} alt="" />
    </div>
    <div>
      <img src={pic3} alt="" />
    </div>
  </Carousel>;
};
const images = [{ url: pic1 }, { url: pic2 }, { url: pic3 }];
function ImageSlider() {
  const styles = {
    width: "80%",
    margin: "auto",
  };

  return (
    <div style={styles}>
      <Slider />
      <SimpleImageSlider
        width={1024}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2.5}
      />
    </div>
  );
}

export default ImageSlider;
