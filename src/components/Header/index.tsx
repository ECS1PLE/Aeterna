"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      className={`py-4 sm:sticky top-0 left-0 right-0 z-50 px-4 sm:px-0 transition-colors duration-300 fixed mb-12 ${
        isScrolled && !isOpen
          ? "bg-white/1 border-b border-white/15 backdrop-blur-lg"
          : isScrolled && isOpen
          ? "bg-white/1 border-b border-white/15"
          : "bg-transparent"
      }`}
    >
      <section className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="hidden md:flex gap-11 items-center">
          <NavList>
            <NavItem
              href="/"
              showChevron={true}
              className="text-neutral-500 px-2"
            >
              Продукция
            </NavItem>
            <NavItem
              href="/"
              showChevron={true}
              className="text-neutral-500 px-2"
            >
              Решения
            </NavItem>
            <NavItem
              href="/"
              showChevron={true}
              className="text-neutral-500 px-2"
            >
              Документация
            </NavItem>
            <NavItem
              href="/"
              showChevron={false}
              className="text-neutral-500 px-2"
            >
              FAQ
            </NavItem>
          </NavList>
        </div>

        <div className="hidden md:flex gap-3">
          <UIButton color="transparent">Войти в аккаунт</UIButton>
          <UIButton color="white" icon={<Rocket />}>
            Начать работу
          </UIButton>
        </div>

        <div className="md:hidden z-50">
          <UIButton
            color="white"
            icon={isOpen ? <X size={20} /> : <Menu size={20} />}
            onClick={toggleMenu}
          >
            {isOpen ? "Закрыть" : "Меню"}
          </UIButton>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen bg-neutral-800 z-40 flex flex-col p-4 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-[48px] h-[40px]">
              <Logo />
            </div>

            <div className="flex-grow">
              <NavList className="flex flex-col gap-4 w-full max-w-xs text-left">
                <NavItem
                  className="text-left w-full text-neutral-300"
                  href="/"
                  showChevron={true}
                  onClick={() => setIsOpen(false)}
                >
                  Продукция
                </NavItem>
                <NavItem
                  className="text-left w-full text-neutral-300"
                  href="/"
                  showChevron={true}
                  onClick={() => setIsOpen(false)}
                >
                  Решения
                </NavItem>
                <NavItem
                  className="text-left w-full text-neutral-300"
                  href="/"
                  showChevron={true}
                  onClick={() => setIsOpen(false)}
                >
                  Документация
                </NavItem>
                <NavItem
                  className="text-left w-full text-neutral-300"
                  href="/"
                  showChevron={false}
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </NavItem>
              </NavList>
            </div>

            <div className="mt-8 mb-[16px] flex flex-col gap-3 w-full max-w-xs mx-auto ">
              <UIButton
                color="transparent"
                onClick={() => setIsOpen(false)}
                className="w-full text-neutral-300"
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
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
