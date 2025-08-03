import React from "react";
import NavItem from "./NavItem";

interface NavListProps {
  children: React.ReactNode;
}

const NavList: React.FC<NavListProps> = ({ children }) => {
  return <div className="flex gap-4 items-center">{children}</div>;
};

export default NavList;
