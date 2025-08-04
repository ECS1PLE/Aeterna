import Logo from "../Brand";
import NavItem from "./NavItem";
import NavList from "./NavList";
import Button from "../Ui/Button";
import { Rocket } from "lucide-react";

const Header = () => {
  return (
    <header className="py-7 sticky top-0 z-10">
      <section className="flex justify-between items-center max-w-7xl mx-auto">
        <section className="flex gap-11">
          <Logo />
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
        </section>
        <section className="flex gap-3">
          <Button color="transparent">Войти в аккаунт</Button>
          <Button color="white" icon={<Rocket />}>
            Начать работу
          </Button>
        </section>
      </section>
    </header>
  );
};

export default Header;
