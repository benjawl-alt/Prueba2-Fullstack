import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header id="header">
      <nav id="nav">
        <ul>
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos">Modelos</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/carrito">Carrito</NavLink>
          </li>
          <li>
            <NavLink to="/formulario">Registro</NavLink>
          </li>
          <li>
            <NavLink to="/login">Inicio de Sesión</NavLink>
          </li>
          <li>
            <NavLink to="/nosotros">Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className="button primary">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
