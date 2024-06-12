import { useState } from 'react';
import { MenuButton, MenuLinks, SocialLink } from '.';

export const MenuMobile = () => {
  const [navStatus, setNavStatus] = useState('');
  const [currentRadius, setCurrentRadius] = useState('');

  const ToggleMenu = () => {
    navStatus === 'close' || navStatus === ''
      ? setNavStatus('open')
      : setNavStatus('close');

    const menuElement = document.querySelector('.MenuButton');
    const borderRadius = window.getComputedStyle(menuElement).borderRadius;
    setCurrentRadius(borderRadius);
  };

  return (
    <div id="MenuMobile" className={navStatus}>
      <MenuButton
        currentRadius={currentRadius}
        navStatus={navStatus}
        ToggleMenu={ToggleMenu}
      />

      <div className={`MobileNav ${navStatus}`}>
        <MenuLinks ToggleMenu={ToggleMenu} />

        <div className="MobileNavSocials">
          <SocialLink
            link="/radio"
            text="Escuchanos"
            target="_self"
            ToggleMenu={ToggleMenu}
          />
          <SocialLink
            link="https://www.instagram.com/ccmanuelsuarez/"
            text="Seguinos"
            target="_blank"
            ToggleMenu={ToggleMenu}
          />
        </div>
      </div>
    </div>
  );
};
