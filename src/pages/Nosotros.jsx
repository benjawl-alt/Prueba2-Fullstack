import React from "react";

const Nosotros = () => {
  return (
    <div id="page-wrapper">
      {/* 🔹 No necesitamos el header aquí, Navbar ya está en App.jsx */}

      <section id="banner" className="style2">
        <div className="content">
          <header>
            <h2>Conoce más sobre IgnaBen Motors</h2>
            <p>Pasión por los autos deportivos y la excelencia en el servicio.</p>
          </header>
          <span className="image">
            <img src="images/logo2.jpg" alt="Logo IgnaBen Motors" />
          </span>
        </div>
      </section>

      <main id="main" className="wrapper style1">
        <div className="container">
          {/* Secciones de contenido */}
          <section>
            <header className="major">
              <h2>Sobre IgnaBen Motors</h2>
              <p>
                Somos una empresa dedicada a ofrecer los autos deportivos más
                exclusivos y de alto rendimiento del mercado...
              </p>
            </header>
            <p>
              Nuestra pasión por los autos nos lleva a seleccionar cuidadosamente...
            </p>
          </section>

          <section className="features">
            <article>
              <span className="icon solid major fa-bullseye"></span>
              <div className="content">
                <h3>Misión</h3>
                <p>
                  Proveer autos deportivos de alta calidad...
                </p>
              </div>
            </article>
            <article>
              <span className="icon solid major fa-eye"></span>
              <div className="content">
                <h3>Visión</h3>
                <p>
                  Ser la concesionaria líder en autos deportivos de Latinoamérica...
                </p>
              </div>
            </article>
          </section>

          <section>
            <header className="major">
              <h2>Nuestro Equipo</h2>
              <p>Profesionales apasionados por los autos...</p>
            </header>
            <div className="row gtr-uniform">
              <section className="col-4 col-6-medium col-12-xsmall">
                <h3>Benjamin Vasquez</h3>
              </section>
              <section className="col-4 col-6-medium col-12-xsmall">
                <h3></h3>
              </section>
              <section className="col-4 col-6-medium col-12-xsmall">
                <h3>Ignacio Bustamante</h3>
              </section>
            </div>
          </section>
        </div>
      </main>

      <footer id="footer">
        <ul className="icons">
          <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
          <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
        <ul className="copyright">
          <li>&copy; IgnaBen Motors. Todos los derechos reservados.</li>
          <li>Diseño: <a href="http://html5up.net" target="_blank" rel="noreferrer">HTML5 UP</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Nosotros;
