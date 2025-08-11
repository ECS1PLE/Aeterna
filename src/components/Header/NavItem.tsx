"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface NavItemProps {
  href: string;
  showChevron?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  showChevron = false,
  children,
  onClick,
  className = "",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={href}
        onClick={onClick}
        className={`
          font-geologica font-normal text-base leading-6 tracking-tight 
          flex items-center gap-1
          transition-colors duration-300 mt-auto mb-auto

          ${hovered ? "text-white" : "text-neutral-300 md:text-neutral-500"}
        `}
      >
        {children}
        {showChevron && (
          <ChevronDownIcon
            className={`
              w-3 h-3 transition-transform duration-300 mt-auto mb-auto
              ${
                hovered
                  ? "-rotate-90 text-white"
                  : "rotate-0 text-neutral-300 md:text-neutral-500"
              }
            `}
          />
        )}
      </Link>
    </div>
  );
};

export default NavItem;
