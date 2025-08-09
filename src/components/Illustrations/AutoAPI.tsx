"use client";

import React, { useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useInView } from "react-intersection-observer";
import AutoAPI from "../Lottie/AutoAPI.json";

const AutoAPIIllustration = () => {
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
    <div
      ref={inViewRef}
      className="w-full max-w-[872px] rounded-md overflow-hidden will-change-transform transform-gpu transition-opacity duration-700 ease-in-out"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={AutoAPI}
        autoplay={false}
        loop={false}
        renderer="svg"
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: true,
        }}
        className="w-full h-full"
      />
    </div>
  );
};

export default AutoAPIIllustration;
