"use client";

import React, { useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useInView } from "react-intersection-observer";
import Editor from "../Lottie/Editor.json";

const EditorIllustration: React.FC = () => {
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
        animationData={Editor}
        autoplay={false}
        loop={false}
        style={{
          width: "872px",
          height: "100%",
        }}
      />
    </div>
  );
};

export default EditorIllustration;
