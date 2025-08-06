"use client";

import Lottie from "lottie-react";
import React from "react";
import Publish from "../Lottie/Deploy.json";

const PublishIllustration = () => {
  return (
    <Lottie
      animationData={Publish}
      loop={true}
      autoplay={true}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default PublishIllustration;
