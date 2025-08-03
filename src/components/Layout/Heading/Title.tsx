import React from "react";

interface TitleHeadingProps {
  firstPart: string;
  secondPart: string;
}

const TitleHeading: React.FC<TitleHeadingProps> = ({
  firstPart,
  secondPart,
}) => {
  return (
    <p
      className="
        max-w-[358px]
        font-norma leading-[28px]
        tracking-[-1.8px] text-3xl
      "
    >
      <span className="text-white">{firstPart}</span>
      <span className="text-[#1892EA]">{secondPart}</span>
    </p>
  );
};

export default TitleHeading;
