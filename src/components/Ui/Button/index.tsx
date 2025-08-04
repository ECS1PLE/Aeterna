"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  color: "white" | "transparent";
  icon?: React.ReactNode;
}

const UIButton: React.FC<ButtonProps> = ({ children, color, icon }) => {
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
      className={`flex gap-2 justify-center items-center py-2 px-5 rounded-full ${getBackgroundColor()}`}
    >
      {icon && <div className={`h-5 w-5 ${getTextColor()}`}>{icon}</div>}
      <span className={`${getTextColor()}`}>{children}</span>
    </button>
  );
};

export default UIButton;
