import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#222", padding: "10px" }}>
      <Link to="/" style={{ color: "white", margin: "10px" }}>Inicio</Link>
      <Link to="/productos" style={{ color: "white", margin: "10px" }}>Productos</Link>
      <Link to="/nosotros" style={{ color: "white", margin: "10px" }}>Nosotros</Link>
      <Link to="/formulario" style={{ color: "white", margin: "10px" }}>Formulario</Link>
      <Link to="/carrito" style={{ color: "white", margin: "10px" }}>Carrito</Link>
      <Link to="/login" style={{ color: "white", margin: "10px" }}>Iniciar sesión</Link>
    </nav>
  );
}

export default Navbar;
