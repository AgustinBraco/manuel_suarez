import { useState, useEffect } from 'react';
import { Logo, MenuMobile, MenuDesktop } from '.';

const viewport = 412;
const isMenuMobile = viewport < 915;

export const Header = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="Header" className={`${isScrolled ? 'White' : 'Transparent'}`}>
      <Logo />
      {isMenuMobile ? <MenuMobile /> : <MenuDesktop />}
    </header>
  );
};
