import React from "react";

interface BannerIndexProps {
  children: React.ReactNode;
}

const SubTitle: React.FC<BannerIndexProps> = ({ children }) => {
  return (
    <p
      className={`
        font-normal
        text-lg
        leading-5
        text-neutral-400
        text-center
        max-w-[717px]
      `}
    >
      {children}
    </p>
  );
};

export default SubTitle;
