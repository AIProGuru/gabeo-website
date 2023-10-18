import React from "react";
import "./partnerships.scss";

import { Carousel } from "components/Carousel/Carousel";

export const Partnerships = () => {
  const images = [
    "/assets/logos/OHSU.png",
    "/assets/logos/athenahealth_logo.png",
    "/assets/logos/Scripps_logo.png",
    "/assets/logos/TOI_logo.png",
    "/assets/logos/innovacare-logo.png",
  ];
  return <Carousel images={images} />;
};
