import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "./Images";
import "./carousel.scss";
export const Carousel = ({ images }) => {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="carousel">
      <div className="content">
        <div className="container">
          <Slider {...settings}>
            {images.map((item, index) => (
              <div key={index}>
                <img src={item} alt="" className="img" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
