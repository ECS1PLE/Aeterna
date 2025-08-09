"use client";

import React, { useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useInView } from "react-intersection-observer";
import Publish from "../Lottie/Deploy.json";

const PublishIllustration = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.4,
    rootMargin: "1px 0px 1px 0px",
    triggerOnce: false,
    initialInView: true,
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
        animationData={Publish}
        autoplay={false}
        loop={false}
        className="w-full h-full scale-100 sm:scale-[0.69] origin-center"
      />
    </div>
  );
};

export default PublishIllustration;
