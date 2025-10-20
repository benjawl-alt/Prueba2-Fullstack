// src/pages/Productos.jsx
import React, { useEffect, useState } from "react";

const productosData = [
  {
    id: 1,
    nombre: "Mustang 2025",
    precio: 51000000,
    descripcion: "Potencia, estilo y tecnología en el Mustang 2025.",
    imagen: "images/mustang.jpg",
  },
  {
    id: 2,
    nombre: "BMW M3 Competicion 2025",
    precio: 126000000,
    descripcion: "Lujo y deportividad con motor biturbo.",
    imagen: "images/m3competicion.jpg",
  },
  {
    id: 3,
    nombre: "Audi R8",
    precio: 150000000,
    descripcion: "Superdeportivo V10 con sonido inconfundible.",
    imagen: "images/audir8.jpg",
  },
  {
    id: 4,
    nombre: "Subaru WRX 2025",
    precio: 33000000,
    descripcion: "Tracción total y motor turbo para conducción dinámica.",
    imagen: "images/wrx.jpg",
  },
];

const Productos = () => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    alert(`${producto.nombre} fue agregado al carrito.`);
  };

  return (
    <div id="page-wrapper">
      <main id="main" className="wrapper style1">
        <div className="container">
          <header className="major">
            <h2>Modelos Deportivos</h2>
            <p>Explora nuestra colección de autos deportivos exclusivos.</p>
          </header>

          <section id="productos" className="products-list">
            {productosData.map((prod) => (
              <article key={prod.id} className="product">
                <h3>{prod.nombre}</h3>
                <img
                  src={prod.imagen}
                  alt={prod.nombre}
                  className="image fit"
                />
                <p>{prod.descripcion}</p>
                <p>
                  <strong>Precio:</strong> ${prod.precio.toLocaleString("es-CL")}
                </p>
                <button
                  className="button primary"
                  onClick={() => agregarAlCarrito(prod)}
                >
                  Comprar
                </button>
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Productos;
