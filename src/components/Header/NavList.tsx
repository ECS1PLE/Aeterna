import React from "react";
import NavItem from "./NavItem";

interface NavListProps {
  children: React.ReactNode;
}

const NavList: React.FC<NavListProps> = ({ children }) => {
  return <nav className="flex items-center">{children}</nav>;
};

export default NavList;
