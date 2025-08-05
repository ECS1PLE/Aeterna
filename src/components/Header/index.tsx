"use client";

import React, { useState, useEffect } from "react";
import Logo from "../Brand";
import NavItem from "./NavItem";
import NavList from "./NavList";
import UIButton from "../Ui/Button";
import { Rocket, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-4 sticky top-0 z-50 ${
        isScrolled ? "bg-white/1" : "bg-transparent"
      } md:border-b border-white/15 transition-colors duration-300`}
    >
      <section className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <section className="flex gap-11 items-center">
          <Logo />
          <div className="hidden md:flex">
            <NavList>
              <NavItem href="/" showChevron={true}>
                Продукция
              </NavItem>
              <NavItem href="/" showChevron={true}>
                Решения
              </NavItem>
              <NavItem href="/" showChevron={true}>
                Документация
              </NavItem>
              <NavItem href="/" showChevron={false}>
                FAQ
              </NavItem>
            </NavList>
          </div>
        </section>

        <div className="hidden md:flex gap-3">
          <UIButton color="transparent">Войти в аккаунт</UIButton>
          <UIButton color="white" icon={<Rocket />}>
            Начать работу
          </UIButton>
        </div>

        <div className="md:hidden">
          <UIButton
            color="white"
            icon={isOpen ? <X size={20} /> : <Menu size={20} />}
            onClick={toggleMenu}
          >
            Меню
          </UIButton>
        </div>
      </section>

      {isOpen && (
        <nav className="md:hidden shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            <NavList className="flex flex-wrap justify-center gap-3 max-w-[calc(3*200px+2*12px)] mx-auto">
              <NavItem
                href="/"
                showChevron={true}
                onClick={() => setIsOpen(false)}
              >
                Продукция
              </NavItem>
              <NavItem
                href="/"
                showChevron={true}
                onClick={() => setIsOpen(false)}
              >
                Решения
              </NavItem>
              <NavItem
                href="/"
                showChevron={true}
                onClick={() => setIsOpen(false)}
              >
                Документация
              </NavItem>
              <NavItem
                href="/"
                showChevron={false}
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </NavItem>
            </NavList>

            <div className="flex flex-row gap-3 mt-4 w-[90vw]">
              <UIButton
                color="transparent"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                Войти в аккаунт
              </UIButton>
              <UIButton
                color="white"
                icon={<Rocket />}
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                Начать работу
              </UIButton>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
