import { Link } from 'react-router-dom';

export const Logo = () => (
  <Link to="/" id="Logo">
    <img src="/logo.png" alt="Logo" className="LogoImage" />
    <div className="LogoWrapper">
      <p className="LogoText">Centro Cultural</p>
      <p className="LogoText">
        <b>Manuel Suarez</b>
      </p>
    </div>
  </Link>
);
