import Logo from "../Brand";
import NavItem from "./NavItem";
import NavList from "./NavList";
import Button from "../Ui/Button";

const Header = () => {
  return (
    <header className="flex py-7 justify-between items-center">
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
        <Button color="white">Начать работу</Button>
      </section>
    </header>
  );
};

export default Header;
