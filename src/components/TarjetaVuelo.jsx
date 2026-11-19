import { formatoPrecio } from '../formato.js'

export default function TarjetaVuelo({ vuelo, seleccionada, onSeleccionar }) {
  return (
    <li>
      <button
        type="button"
        className={'tarjeta-vuelo' + (seleccionada ? ' seleccionada' : '')}
        aria-pressed={seleccionada}
        onClick={() => onSeleccionar(vuelo)}
      >
        <span className="salida">
          <strong>{vuelo.hora}</strong>
          <small>Salida</small>
        </span>
        <span className="ruta-tarjeta">
          <strong>{vuelo.avion}</strong>
          <small>{vuelo.origen} → {vuelo.destino}</small>
        </span>
        <span className="precio-tarjeta">
          <strong>{formatoPrecio(vuelo.precio)}</strong>
          <small>{seleccionada ? 'Seleccionado ✓' : 'Ver vuelo →'}</small>
        </span>
      </button>
    </li>
  )
}
