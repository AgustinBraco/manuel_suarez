import { Link } from 'react-router-dom';

export const PersonLink = ({ link, title, text }) => (
  <Link target="_blank" to={link} id="PersonLink">
    <p className="PersonLinkText">{title}</p>
    <p className="PersonLinkText">
      <b>{text}</b>
    </p>
  </Link>
);
