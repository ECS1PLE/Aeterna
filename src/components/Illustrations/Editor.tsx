import Lottie from "lottie-react";
import React from "react";
import Editor from "../Lottie/Editor.json";

const EditorIllustration: React.FC = () => {
  return (
    <Lottie
      animationData={Editor}
      loop={true}
      autoplay={true}
      style={{
        width: "max-content",
        height: "100%",
      }}
    />
  );
};

export default EditorIllustration;
