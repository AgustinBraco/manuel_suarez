import { Link } from 'react-router-dom';

export const SocialLink = ({ link, text, target, ToggleMenu }) => (
  <Link target={target} to={link} className="SocialLink" onClick={ToggleMenu}>
    {text}
  </Link>
);
