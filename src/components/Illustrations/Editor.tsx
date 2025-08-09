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
    <div
      ref={inViewRef}
      className="overflow-hidden will-change-transform transform-gpu transition-opacity duration-700 ease-in-out rounded-tl-md w-[872px] h-[100%]"
      style={{
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={Editor}
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

export default EditorIllustration;
