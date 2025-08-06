import React from "react";
import Lottie from "lottie-react";
import animationData from "../Lottie/Editor.json"; // Укажите путь к вашему JSON файлу анимации

const EditorIllustration: React.FC = () => {
  return (
    <div className="w-[832px] h-[400px]">
      <Lottie
        animationData={animationData}
        loop={true} // Установите true, если хотите зациклить анимацию
        autoplay={true} // Установите true, чтобы анимация начинала воспроизводиться автоматически
      />
    </div>
  );
};

export default EditorIllustration;
