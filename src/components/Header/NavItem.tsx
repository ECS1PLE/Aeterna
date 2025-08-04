"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface NavItemProps {
  href: string;
  showChevron?: boolean;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  showChevron = false,
  children,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="flex items-center gap-1 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={href}
        className={`
    font-geologica font-normal text-base leading-6 tracking-tight 
    text-neutral-500 flex items-center gap-1
    transition-colors duration-300 mt-auto mb-auto
    ${hovered ? "text-white" : ""}
  `}
      >
        {children}
        {showChevron && (
          <ChevronDownIcon
            className={`
      w-3 h-3 transition-transform duration-400 mt-auto mb-auto
      ${hovered ? "-rotate-90 text-white" : "rotate-0 text-neutral-500"}
    `}
          />
        )}
      </Link>
    </li>
  );
};

export default NavItem;
