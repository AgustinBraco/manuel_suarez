import { useState, useEffect } from 'react';
import { Logo, MenuMobile, MenuLinks } from '.';

export const Header = () => {
  const isMenuMobile = window.innerWidth < 1070;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ToggleMenu = () => {
    return;
  };

  return (
    <header id="Header">
      <Logo />
      {isMenuMobile ? <MenuMobile /> : <MenuLinks ToggleMenu={ToggleMenu} />}
    </header>
  );
};
