import React from "react";
import NavItem from "./NavItem";

interface NavListProps {
  children: React.ReactNode;
  className?: string;
}

const NavList: React.FC<NavListProps> = ({ children, className }) => {
  return (
    <nav className={`flex items-center ${className ?? ""}`}>{children}</nav>
  );
};

export default NavList;
