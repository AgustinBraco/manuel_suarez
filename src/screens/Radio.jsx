import { useEffect } from 'react';
import { Program } from '../components';

export const Radio = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main id="Radio">
      <section className="Player">
        <p className='PlayerTitle'>FM La Mosca 93.5</p>
        <iframe
          className="PlayerIframe"
          src="https://streamingargentino.info/html5/la_mosca/index.html"
        ></iframe>
      </section>

      <section className="Programs">
        <p className="ProgramsTitle">Programas</p>
        <div className='ProgramsWrapper'>
          <Program
            title="Santitodi"
            time="Miércoles de 16 a 17hs"
            image="santitodi"
          />

          <Program
            title="Periodismo en movimiento"
            time="Sábado de 16 a 17hs"
            image="movimiento"
          />

          <Program
            title="Sin careta"
            time="Sábado 17 a 19hs"
            image="sincareta"
          />
        </div>
      </section>
    </main>
  );
};
