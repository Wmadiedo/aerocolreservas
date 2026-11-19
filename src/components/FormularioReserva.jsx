import { useState } from 'react'
import { CLASES } from '../data/vuelos.js'
import { formatoPrecio } from '../formato.js'

export default function FormularioReserva({ vuelo, onReservar }) {
  const [nombre, setNombre] = useState('')
  const [pasajeros, setPasajeros] = useState(1)
  const [clase, setClase] = useState('economica')
  const claseElegida = CLASES.find((opcion) => opcion.id === clase)
  const total = Math.round(vuelo.precio * pasajeros * claseElegida.factor)

  function enviarReserva(evento) {
    evento.preventDefault()
    if (!nombre.trim()) return
    onReservar({ nombre: nombre.trim(), vuelo: vuelo.id, pasajeros, clase: claseElegida.nombre, total })
    setNombre('')
    setPasajeros(1)
    setClase('economica')
  }

  return (
    <form onSubmit={enviarReserva} className="formulario">
      <div className="detalle">
        <span className="mini-etiqueta">VUELO {vuelo.id.toUpperCase()} · {vuelo.origen} → {vuelo.destino}</span>
        <h2>Reservar {vuelo.avion}</h2>
        <p>Salida {vuelo.hora} · {formatoPrecio(vuelo.precio)} por pasajero</p>
      </div>
      <div className="campo">
        <label htmlFor="nombre">Nombre del pasajero</label>
        <input id="nombre" type="text" value={nombre} onChange={(evento) => setNombre(evento.target.value)}
          placeholder="Ej. Ana García" autoComplete="name" maxLength={100} required />
      </div>
      <div className="fila-pasajeros">
        <span>Pasajeros</span>
        <div className="pasajeros" role="group" aria-label="Cantidad de pasajeros">
          <button type="button" aria-label="Quitar pasajero" disabled={pasajeros === 1}
            onClick={() => setPasajeros((cantidad) => Math.max(1, cantidad - 1))}>−</button>
          <output aria-label="Pasajeros">{pasajeros}</output>
          <button type="button" aria-label="Agregar pasajero"
            onClick={() => setPasajeros((cantidad) => cantidad + 1)}>+</button>
        </div>
      </div>
      <fieldset>
        <legend>Clase</legend>
        <div className="clases">
          {CLASES.map((opcion) => (
            <label key={opcion.id}>
              <input type="radio" name="clase" value={opcion.id} checked={clase === opcion.id}
                onChange={(evento) => setClase(evento.target.value)} />
              {opcion.nombre}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="total">
        <span>Total <small>COP</small></span>
        <output aria-label="Total de la reserva">{formatoPrecio(total)}</output>
      </div>
      <button type="submit" className="primario" disabled={!nombre.trim()}>Reservar</button>
    </form>
  )
}
