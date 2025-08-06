"use client";

import Lottie from "lottie-react";
import React from "react";
import AutoAPI from "../Lottie/AutoAPI.json";

const AutoAPIIllustration = () => {
  return (
    <Lottie
      animationData={AutoAPI}
      loop={true}
      autoplay={true}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};
export default AutoAPIIllustration;
