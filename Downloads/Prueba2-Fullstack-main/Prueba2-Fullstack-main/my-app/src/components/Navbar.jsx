import React from "react";

export default function Nav() {
  return (
    <header id="header">
      <nav id="nav">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Modelos</a></li>
          <li><a href="/Blogs">Blogs</a></li>
          <li><a href="/carrito">Carrito</a></li>
          <li><a href="/formulario">Registro</a></li>
          <li><a href="/login">Inicio de Sesion</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/Contacto" className="button primary">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
