// src/pages/Blogs.jsx
import React from "react";

const noticias = [
  {
    id: 1,
    titulo: "Tendencia 2025: Autos conectados con inteligencia artificial",
    descripcion:
      "La industria automotriz está avanzando hacia una nueva era con los autos inteligentes, equipados con asistentes virtuales, sistemas de seguridad avanzados y conexión a Internet.",
    imagen: "images/coche-autonomo-accidente-uber (2).jpg",
  },
  {
    id: 2,
    titulo: "El auge de los autos híbridos en Chile",
    descripcion:
      "En los últimos años, los vehículos híbridos han ganado gran popularidad en el mercado automotriz chileno. Gracias a su bajo consumo de combustible y a los beneficios tributarios, cada vez más conductores están optando por esta tecnología.",
    imagen: "images/NAZ_dc724a4ae3e54698b2cd50f11ff93a49.jpg",
  },
];

const Blogs = () => {
  return (
    <div id="page-wrapper">
      <main id="main" className="wrapper style1">
        <div className="container">
          <h2
            className="titulo-principal"
            style={{ textAlign: "center", margin: "2rem 0", fontSize: "2rem" }}
          >
            NOTICIAS IMPORTANTES
          </h2>

          {noticias.map((noticia) => (
            <section
              key={noticia.id}
              className={`spotlight style${noticia.id} ${
                noticia.id % 2 === 0 ? "left" : "right"
              }`}
            >
              <span className="image fit main">
                <img src="/images/coche-autonomo-accidente-uber (2).jpg" alt={noticia.titulo} />
              </span>
              <div className="content">
                <header>
                  <h3>{noticia.titulo}</h3>
                </header>
                <p>{noticia.descripcion}</p>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blogs;
