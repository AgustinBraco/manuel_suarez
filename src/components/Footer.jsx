import { Logo, PersonLink, SocialLink } from '.';

export const Footer = () => (
  <footer id="Footer">
    <div className="FooterTop">
      <Logo />

      <div className="FooterTopWrapper">
        <SocialLink
          link="/radio"
          text="Escuchanos →"
          target="_self"
        />
        <SocialLink
          link="https://www.instagram.com/ccmanuelsuarez/"
          text="Seguinos →"
          target="_blank"
        />
      </div>
    </div>

    <hr className="FooterLine" />

    <div className="FooterBottom">
      <PersonLink
        link="https://www.linkedin.com/in/lucas-oliva-38858320b/"
        title="Desarrollo:"
        text="Lucas Oliva"
      />

      <PersonLink
        link="https://www.linkedin.com/in/maximiliano-elgarte/"
        title="Diseño:"
        text="Maxi Elgarte"
      />
    </div>
  </footer>
);
