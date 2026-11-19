export default function Header({ cantidad }) {
  return (
    <header className="encabezado">
      <div className="contenedor barra">
        <a className="marca" href="#inicio">
          <span className="marca-icono" aria-hidden="true">✈</span>
          AeroCol
        </a>
        <nav aria-label="Navegación principal">
          <a href="#buscar">Buscar vuelos</a>
          <a href="#reservas">Mis reservas <span className="contador">{cantidad}</span></a>
        </nav>
      </div>
    </header>
  )
}
