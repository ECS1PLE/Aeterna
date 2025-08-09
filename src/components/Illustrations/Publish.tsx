"use client";

import React, { useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useInView } from "react-intersection-observer";
import Publish from "../Lottie/Deploy.json";

const PublishIllustration = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!lottieRef.current) return;
    if (inView) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [inView]);

  return (
    <div ref={inViewRef}>
      <Lottie
        lottieRef={lottieRef}
        animationData={Publish}
        autoplay={false}
        loop={false}
        style={{
          width: "100%",
          height: "100%",
          transform: "scale(0.68)",
        }}
      />
    </div>
  );
};

export default PublishIllustration;
