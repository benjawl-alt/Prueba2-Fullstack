import React from "react";
import { Link } from "react-scroll";
import "../assets/styles.css"; // Asegúrate de importar tu CSS aquí

export default function Inicio() {
  return (
    <>
      <section id="banner">
        <div className="content">
          <header>
            <h2>Busca tu auto del futuro</h2>
            <p>El auto que buscas en un solo lugar, y te está esperando...</p>
          </header>
        </div>
        <Link
          to="one"
          className="goto-next scrolly"
          smooth={true}
          duration={800}
          role="button"
          tabIndex="0"
        >
          &#x2193;
        </Link>
      </section>

      <section id="one" className="spotlight style1 bottom">
        <span className="image fit main"><img src="/images/DSC_0108.jpg" alt="" style={{ opacity: 1, display: "block" }} />
</span>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-4 col-12-medium">
                <header>
                  <h2>Encuentra tu auto ideal con nosotros</h2>
                  <p>Ofrecemos una amplia selección de vehículos, desde autos compactos hasta modelos de lujo.</p>
                </header>
              </div>
              <div className="col-4 col-12-medium">
                <p>Variedad y opciones para todos los gustos. Desde coches eficientes hasta SUVs familiares.</p>
              </div>
              <div className="col-4 col-12-medium">
                <p>Cada auto es revisado por expertos y garantizado para tu seguridad y satisfacción.</p>
              </div>
            </div>
          </div>
        </div>
        <a href="#two" className="goto-next scrolly"></a>
      </section>

      <section id="two" className="spotlight style2 right">
        <span className="image fit main"><img src="/images/64786f3d739a8300323b5f25.jpg" alt="" /></span>
        <div className="content">
          <header>
            <h2>Asesoramiento personalizado</h2>
            <p>Nuestro equipo de asesores está listo para ayudarte a elegir el vehículo perfecto según tus necesidades.</p>
          </header>
          <p>Te acompañamos en cada paso del proceso de compra y financiamiento.</p>
        </div>
        
      </section>

      <section id="videoCinematica" className="wrapper style1 special fade-up">
        <div className="container">
          <header className="major">
            <h2>Cinemática de Autos Deportivos</h2>
            <p>Disfruta de nuestra ultima adquisición</p>
          </header>
          <div className="video-container" style={{ textAlign: "center" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YAFUyPp_238?si=oSvgcR4yrkfpEXn2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <footer id="footer">
        <ul className="icons">
          <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
          <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
        <ul className="copyright">
          <li>&copy; IgnaBen Motors. Todos los derechos reservados.</li>
        </ul>
      </footer>
    </>
  );
}
