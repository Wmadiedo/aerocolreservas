import { formatoFecha, formatoPrecio } from '../formato.js'

export default function MisReservas({ reservas, onEliminar }) {
  return (
    <section className="panel reservas" id="reservas" aria-labelledby="titulo-reservas">
      <div className="cabecera-panel">
        <div>
          <span className="mini-etiqueta">TUS VIAJES</span>
          <h2 id="titulo-reservas">Mis reservas ({reservas.length})</h2>
        </div>
      </div>
      {reservas.length === 0 ? (
        <p className="vacio">Aún no tienes reservas 👀</p>
      ) : (
        <ul className="lista-reservas">
          {reservas.map((reserva) => (
            <li key={reserva.id} className="reserva">
              <div>
                <strong>{reserva.nombre}</strong>
                <p>Vuelo {reserva.vuelo} · {reserva.pasajeros} {reserva.pasajeros === 1 ? 'pasajero' : 'pasajeros'} · {reserva.clase}</p>
                <time dateTime={reserva.fecha}>Reservado el {formatoFecha(reserva.fecha)}</time>
              </div>
              <strong className="monto-reserva">{formatoPrecio(reserva.total)}</strong>
              <button type="button" className="eliminar" aria-label={'Eliminar reserva de ' + reserva.nombre}
                onClick={() => onEliminar(reserva.id)}><span aria-hidden="true">🗑</span> Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
