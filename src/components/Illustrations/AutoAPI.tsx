"use client";

import React, { useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useInView } from "react-intersection-observer";
import AutoAPI from "../Lottie/AutoAPI.json";

const AutoAPIIllustration = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

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
        animationData={AutoAPI}
        autoplay={false}
        loop={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default AutoAPIIllustration;
