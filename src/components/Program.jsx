export const Program = ({ title, time, image }) => (
  <div id="Program">
    <img className="ProgramImage" src={`/programs/${image}.png`} alt="Imagen" />
    <p className="ProgramTitle">{title}</p>
    <p className="ProgramTime">{time}</p>
  </div>
);
