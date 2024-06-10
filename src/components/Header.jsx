import { Logo, MenuMobile, MenuDesktop } from '.';

const viewport = 412;
const isMenuMobile = viewport < 915;

export const Header = () => {
  return (
    <header id="Header">
      <Logo />
      {isMenuMobile ? <MenuMobile /> : <MenuDesktop />}
    </header>
  );
};
