import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import {  } from '../components';

export const Landing = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main id="Landing">
      <section className="Home">
        <div className="HomeTexts">
          <p className="HomeText">¡Bienvenido/a al</p>
          <p className="HomeText">Centro Cultural</p>
          <p className="HomeText">
            <b>Manuel Suarez!</b>
          </p>
        </div>
        <div className="HomeLinks">
          <Link
            className="HomeSocial"
            target="_blank"
            to="https://wa.link/73mjyt"
          >
            Sumate
          </Link>
          <Link className="HomeLive" target="_self" to="/radio">
            Escuchanos
          </Link>
        </div>
        <div className="HomeImage"></div>
      </section>

      <section className="History">
        <p className="HistoryTitle">Nosotros</p>

        <p className="HistoryText">
          Nuestro Centro Cultural comenzó sus actividades en el cambio de siglo
          con la gran crisis socioeconómica que atravesamos como sociedad. En
          nuestro espacio fuimos sede de múltiples actividades, fiestas y
          conmemoraciones, siendo un espacio de referencia para la comunidad de
          zona sur y Piñeyro. Nuestros pilares siempre han sido las luchas
          sociales y la dignificación de nuestro pueblo.
        </p>
        <img
          className="HistoryImage"
          src="/history/history_1.png"
          alt="Imagen"
        />

        <p className="HistoryText">
          En nuestros inicios albergamos el movimiento piquetero, un canal de
          televisión (Barricada TV) e impulsamos variadas expresiones
          culturales, entre ellas FM LA MOSCA 93.5. A partir de 2011 funcionó
          por varios años en nuestro segundo piso el Bachillerato Popular
          “Arbolito” y se abrió un espacio de producción de cerámica para la
          formación laboral y una cooperativa que funciona hasta nuestra
          actualidad.
        </p>
        <img
          className="HistoryImage"
          src="/history/history_2.png"
          alt="Imagen"
        />
      </section>

      <section className="Library">
        <p className="LibraryTitle">Biblioteca</p>
        <p className="LibraryTitle">Raúl Gonzalez Tuñón</p>

        <p className="LibraryText">
          Disponemos de una colección muy nutrida de libros históricos de
          referencia política de tradiciones vinculadas con la izquierda y
          temáticas asociadas con un espacio ameno para el disfrute de la
          lectura. Tenemos una colección bien variada de libros históricos y
          políticos, para los que les gusta sumergirse en esos temas. También
          tenemos un montón de libros que te van a hacer reír, pensar y
          disfrutar cada página.
        </p>

        <img
          className="LibraryImage"
          src="/library/library_1.png"
          alt="Imagen"
        />
        <img
          className="LibraryImage"
          src="/library/library_2.png"
          alt="Imagen"
        />
      </section>

      <section className="Ceramic">
        <div className="CeramicWrapper">
          <p className="CeramicTitle">Cerámica</p>
          <img
            className="CeramicImage"
            src="/ceramic/ceramic.png"
            alt="Imagen"
          />
        </div>
        <p className="CeramicText">
          Comenzó esta actividad con un horno donado por la Escuela de Cerámica
          de Avellaneda con el cual jóvenes de dicho espacio realizaban
          prácticas docentes con grupos del Bachillerato Arbolito que funcionaba
          en nuestra institución. Luego dicha experiencia se transformó en algo
          de mayor envergadura: logramos generar una sede de talleres de
          formación laboral del Ministerio de Trabajo de la Nación. Estos
          talleres son únicos en nuestro país con dicha característica. En
          paralelo se fue gestando un colectivo de producción (COOPECE)
          vinculado a las tradiciones de autogestión, que durante años se
          mantuvo en funcionamiento, y donde nuestro querido y siempre recordado
          Natalio Maccarini fue referente singular.
        </p>
        <p className="CeramicText">
          Hoy en día saliendo de la pandemia ya en el espacio de cerámica se
          comienza a gestar un nuevo colectivo de producción MICORRIZA Cerámica
          Cooperativa. Este es un proyecto que excede lo laboral y comercial.
          Micorriza se trata de la forma en que elegimos habitar este mundo. Así
          como los hongos y las plantas que encontraron hace miles de años las
          asociaciones Micorrícicas para conectarse y ayudarse, esperamos
          generar en esta cooperativa, un horizonte donde el apoyo mutuo sea
          moderador de nuestras relaciones. Así mismo, encontramos en las artes
          cerámicas, una forma de ser parte del equilibrio dinámico entre los
          elementos esenciales para la vida, como lo son la tierra, el aire, el
          fuego y el agua; y, a través de ellos, poder plasmar en cada pieza,
          esta danza de sueños y sentires.
        </p>
      </section>

      <section className="Radio">
        <p className="RadioTitle">FM La Mosca 93.5</p>

        <p className="RadioText">
          Durante muchos años cobijamos a decenas de programas contraculturales,
          deportivos, políticos, musicales y de diversa índole. Disponemos de
          antena de alcance medio con transmisor analógico que nos permite una
          llegada a los hogares de varios kilómetros a la redonda. Luego vía app
          y streaming logramos alcanzar todos los dispositivos digitales que nos
          quieran escuchar.
        </p>
        <img className="RadioImage" src="/radio/radio_1.png" alt="Imagen" />

        <p className="RadioText">
          Con el inicio de la pandemia de 2020 suspendimos las transmisiones
          pero afortunadamente hemos vuelto. En 2023 nos encontramos relanzando
          la programación nuevamente de “Sin Careta”: ¡bastión de feminismo,
          actualidad y rocanrol!
        </p>
        <img className="RadioImage" src="/radio/radio_2.png" alt="Imagen" />
      </section>
    </main>
  );
};
