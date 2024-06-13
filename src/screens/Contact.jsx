import { useEffect } from 'react';
import { Form } from '../components';

export const Contact = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main id="Contact">
      <section className="Form">
        <p className='FormTitle'>Contacto</p>
        <Form />
      </section>

      <section className="Map">
        <iframe
          className="MapIframe"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13124.635959718846!2d-58.3828141!3d-34.6759366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccb78c76cd05%3A0x1dc250b9176f90d0!2sCentro%20Cultural%20Manuel%20Suarez!5e0!3m2!1ses-419!2sar!4v1718296468256!5m2!1ses-419!2sa"
        ></iframe>
      </section>
    </main>
  );
};
