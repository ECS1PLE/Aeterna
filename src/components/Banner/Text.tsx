import React from "react";

interface BannerTextProps {
  children: React.ReactNode;
}

const BannerText: React.FC<BannerTextProps> = ({ children }) => {
  return (
    <p
      className={`
        font-normal
        text-lg
        leading-5
        text-neutral-400
        text-center
        max-w-3xl
      `}
    >
      {children}
    </p>
  );
};

export default BannerText;
