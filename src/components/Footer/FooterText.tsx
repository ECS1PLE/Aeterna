import React from "react";

interface FooterText {
  children: React.ReactNode;
}

const FooterText: React.FC<FooterText> = ({ children }) => {
  return (
    <p className="text-sm leading-[20px] tracking-[-0.4px] text-[#404040] max-w-[250px]">
      {children}
    </p>
  );
};

export default FooterText;
