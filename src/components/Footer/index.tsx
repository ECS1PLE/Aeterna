import Logo from "../Brand";
import FooterText from "./FooterText";
import WorkStatus from "./WorkStatus";
import FooterBlock from "./FooterBlock";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <div className="relative">
      <div className="hidden xl:block absolute top-0 left-1/2 w-screen border-t border-neutral-700 transform -translate-x-1/2 h-[175px]">
        <img
          src="./whiteLight.svg"
          alt="background"
          className="w-screen h-full object-cover absolute"
        />
      </div>
      <footer className="relative py-[97px] gap-[250px] mx-auto flex">
        <div className="flex flex-col gap-[24px] relative z-10">
          <Logo />
          <div className="flex flex-col">
            <FooterText>ООО “Тмыв”</FooterText>
            <FooterText>ИНН 228666148862</FooterText>
            <FooterText>ОГРН 228666148862</FooterText>
          </div>
          <FooterText>
            г. Санкт-Петербург, ул. Маршала Жукова, д. 45, кв. 111
          </FooterText>
          <WorkStatus text="Все системы работают безупречно" />
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
      </footer>
    </div>
  );
};

export default Footer;
