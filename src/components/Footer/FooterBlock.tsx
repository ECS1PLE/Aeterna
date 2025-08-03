import React from "react";

interface FooterBlockProps {
  heading?: string;
  children?: React.ReactNode;
}

const FooterBlock: React.FC<FooterBlockProps> = ({ heading, children }) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <p className="tracking-[-0.4px] text-white">{heading}</p>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default FooterBlock;
