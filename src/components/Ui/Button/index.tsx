"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  color: string;
}

const UIButton: React.FC<ButtonProps> = ({ children, color }) => {
  function getBackgroundColor() {
    switch (color) {
      case "white":
        return "bg-white";
      case "transparent":
        return "bg-transparent";
      default:
        return "bg-white";
    }
  }
  function getTextColor() {
    switch (color) {
      case "white":
        return "text-neutral-950";
      case "transparent":
        return "text-white";
      default:
        return "";
    }
  }
  return (
    <button
      className={`
        inline-flex justify-center items-center
        py-2 px-5
        rounded-full ${getBackgroundColor()}`}
    >
      <span className={`${getTextColor()} leading-[1]`}>{children}</span>
    </button>
  );
};

export default UIButton;
