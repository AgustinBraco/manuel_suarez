import { Link } from 'react-router-dom';

export const SocialLink = ({ link, text, target, ToggleMenu }) => (
  <Link target={target} to={link} id="SocialLink" onClick={ToggleMenu}>
    {text}
  </Link>
);
