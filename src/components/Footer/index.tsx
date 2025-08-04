"use client";

import { usePathname, useRouter } from "next/navigation";
import Logo from "../Brand";
import FooterText from "./FooterText";
import Status from "./Status";
import FooterBlock from "./FooterBlock";
import FooterLink from "./FooterLink";
import Wrapper from "../Layout/Wrapper";
import Sphere from "./Sphere";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToTopOrRedirect = () => {
    if (pathname === "/") {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push("/");
    }
  };

  return (
    <footer className="py-24 *:justify-between *:flex border-t border-neutral-700 relative">
      <div className="absolute top-0 left-0 right-0 mx-auto">
        <Sphere />
      </div>
      <Wrapper>
        <div className="flex flex-col gap-6 relative z-10">
          <button
            onClick={scrollToTopOrRedirect}
            aria-label="Scroll to top or go home"
            className="cursor-pointer p-0 m-0 bg-transparent border-0"
          >
            <Logo />
          </button>
          <div className="flex flex-col">
            <FooterText>ООО “Тмыв”</FooterText>
            <FooterText>ИНН 228666148862</FooterText>
            <FooterText>ОГРН 228666148862</FooterText>
          </div>
          <FooterText>
            г. Санкт-Петербург, ул. Маршала Жукова, д. 45, кв. 111
          </FooterText>
          <Status />
        </div>
        <div className="flex gap-8 relative z-10">
          <FooterBlock heading="Ресурсы">
            <FooterLink href="/">Политика конфиденциальности</FooterLink>
            <FooterLink href="/">Публичная оферта</FooterLink>
            <FooterLink href="/">Условия пользования</FooterLink>
            <FooterLink href="/">Тарификация</FooterLink>
          </FooterBlock>
          <FooterBlock heading="О Компании">
            <FooterLink href="/">Политика конфиденциальности</FooterLink>
            <FooterLink href="/">Публичная оферта</FooterLink>
            <FooterLink href="/">Условия пользования</FooterLink>
            <FooterLink href="/">Тарификация</FooterLink>
          </FooterBlock>
          <FooterBlock heading="Документация">
            <FooterLink href="/">Политика конфиденциальности</FooterLink>
            <FooterLink href="/">Публичная оферта</FooterLink>
            <FooterLink href="/">Условия пользования</FooterLink>
            <FooterLink href="/">Тарификация</FooterLink>
          </FooterBlock>
          <FooterBlock heading="Помощь">
            <FooterLink href="/">support@aeterna.ru</FooterLink>
            <FooterLink href="/">Max</FooterLink>
            <FooterLink href="/">VKontakte</FooterLink>
            <FooterLink href="/">+7 (904) 335-67-02</FooterLink>
          </FooterBlock>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
