export const PersonLink = ({ link, title, text }) => (
  <a target="_blank" href={link} className="PersonLink">
    <p className="PersonLinkText">{title}</p>
    <p className="PersonLinkText">
      <b>{text}</b>
    </p>
  </a>
);
