import React from "react";
import "./partnerships.scss";
import OHSU from "assets/logos/OHSU.png";
import AthenaLogo from "assets/logos/athenahealth_logo.png";
import Scripps from "assets/logos/Scripps_logo.png";
import TOILogo from "assets/logos/TOI_logo.png";
import Innovacare from "assets/logos/innovacare-logo.png";
import { Carousel } from "components/Carousel/Carousel";

export const Partnerships = () => {
  const images = [OHSU, AthenaLogo, Scripps, TOILogo, Innovacare];
  return <Carousel images={images} />;
};
