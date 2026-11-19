import TarjetaVuelo from './TarjetaVuelo.jsx'

export default function ListaVuelos({ vuelos, nombreOrigen, nombreDestino, idSeleccionado, onSeleccionar }) {
  if (!nombreOrigen || !nombreDestino) {
    return <p className="vacio">Elige un origen y un destino para ver los vuelos.</p>
  }

  if (vuelos.length === 0) {
    return <p className="vacio" role="status">No hay vuelos para esta ruta. Prueba con otro destino.</p>
  }

  return (
    <>
      <p className="resumen-lista" role="status">
        {vuelos.length} {vuelos.length === 1 ? 'vuelo' : 'vuelos'} · {nombreOrigen} → {nombreDestino}
      </p>
      <ul className="lista-vuelos">
        {vuelos.map((vuelo) => (
          <TarjetaVuelo
            key={vuelo.id}
            vuelo={vuelo}
            seleccionada={vuelo.id === idSeleccionado}
            onSeleccionar={onSeleccionar}
          />
        ))}
      </ul>
    </>
  )
}
