import { useState } from 'react';
import { MenuButton, MenuLinks, SocialLink } from '.';

export const MenuMobile = () => {
  const [navStatus, setNavStatus] = useState('');

  const ToggleMenu = () =>
    navStatus === 'close' || navStatus === ''
      ? setNavStatus('open')
      : setNavStatus('close');

  return (
    <div id="MenuMobile" className={navStatus}>
      <MenuButton ToggleMenu={ToggleMenu} navStatus={navStatus}/>

      <div className={`MobileNav ${navStatus}`}>
        <MenuLinks ToggleMenu={ToggleMenu} />

        <div className="MobileNavSocials">
          <SocialLink
            ToggleMenu={ToggleMenu}
            link="/radio"
            text="Escuchanos"
            target="_self"
          />
          <SocialLink
            ToggleMenu={ToggleMenu}
            link="https://www.instagram.com/ccmanuelsuarez/"
            text="Seguinos"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};
