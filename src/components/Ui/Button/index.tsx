"use client";

import React, { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  color: "white" | "transparent";
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const UIButton: React.FC<ButtonProps> = ({
  children,
  color,
  icon,
  onClick,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  function getBackgroundColor() {
    if (isHovered) {
      return color === "white" ? "bg-white/85" : "bg-white/5";
    }
    return color === "white" ? "bg-white" : "bg-transparent";
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
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex gap-2 justify-center items-center py-2 px-5 rounded-full transition-all duration-300 cursor-pointer ${getBackgroundColor()} ${className}`}
    >
      {icon && <div className={`h-5 w-5 ${getTextColor()}`}>{icon}</div>}
      <span className={`${getTextColor()}`}>{children}</span>
    </button>
  );
};

export default UIButton;
