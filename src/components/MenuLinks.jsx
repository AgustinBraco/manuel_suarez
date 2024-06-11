import { Link } from 'react-router-dom/dist';

export const MenuLinks = ({ ToggleMenu }) => (
  <nav className="MenuLinksWrapper">
    <Link
      className="MenuLink"
      target="_self"
      to="/"
      onClick={() => ToggleMenu()}
    >
      <p>Inicio</p>
      <div className="MenuCircle"></div>
    </Link>
    <Link
      className="MenuLink"
      target="_self"
      to="/radio"
      onClick={() => ToggleMenu()}
    >
      <p>Radio</p>
      <div className="MenuCircle"></div>
    </Link>
    <Link
      className="MenuLink"
      target="_blank"
      to="https://docs.google.com/forms/d/e/1FAIpQLScURjAhUIDmnA_yyRAm9KfMsEKggLzxze9yJdpW0Crt26taJQ/viewform"
      onClick={() => ToggleMenu()}
    >
      <p>Publicidad</p>
      <div className="MenuCircle"></div>
    </Link>
    <Link
      onClick={() => ToggleMenu()}
      className="MenuLink"
      target="_blank"
      to="https://wa.link/73mjyt"
    >
      <p>Hacé radio</p>
      <div className="MenuCircle"></div>
    </Link>
    <Link
      onClick={() => ToggleMenu()}
      className="MenuLink"
      target="_blank"
      to="https://play.google.com/store/apps/details?id=com.app.Radio_La_Mosca"
    >
      <p>Nuestra app</p>
      <div className="MenuCircle"></div>
    </Link>
    <Link
      onClick={() => ToggleMenu()}
      className="MenuLink MenuLinkContact"
      target="_self"
      to="/contacto"
    >
      <p>Contacto</p>
      <div className="MenuCircle"></div>
    </Link>
  </nav>
);
