import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SelectorRuta from './components/SelectorRuta.jsx'
import ListaVuelos from './components/ListaVuelos.jsx'
import FormularioReserva from './components/FormularioReserva.jsx'
import MisReservas from './components/MisReservas.jsx'
import { CIUDADES, VUELOS } from './data/vuelos.js'

const CLAVE_RESERVAS = 'aerocol-reservas'

const COMPARADORES = {
  'precio-asc': (a, b) => a.precio - b.precio,
  'precio-desc': (a, b) => b.precio - a.precio,
  hora: (a, b) => a.hora.localeCompare(b.hora),
  avion: (a, b) => a.avion.localeCompare(b.avion, 'es'),
}

function cargarReservas() {
  try {
    const reservas = JSON.parse(localStorage.getItem(CLAVE_RESERVAS) || '[]')
    return Array.isArray(reservas) ? reservas : []
  } catch {
    return []
  }
}

export default function App() {
  const [origen, setOrigen] = useState('BOG')
  const [destino, setDestino] = useState('MDE')
  const [orden, setOrden] = useState('precio-asc')
  const [seleccionado, setSeleccionado] = useState(null)
  const [reservas, setReservas] = useState(cargarReservas)
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_RESERVAS, JSON.stringify(reservas))
    } catch (error) {
      console.warn('No se pudieron guardar las reservas en este navegador.', error)
    }
  }, [reservas])

  const nombreOrigen = CIUDADES.find((ciudad) => ciudad.codigo === origen)?.nombre
  const nombreDestino = CIUDADES.find((ciudad) => ciudad.codigo === destino)?.nombre
  const vuelosRuta = VUELOS.filter((vuelo) => vuelo.origen === origen && vuelo.destino === destino)
  const vuelosOrdenados = [...vuelosRuta].sort(COMPARADORES[orden])

  function cambiarOrigen(codigo) {
    setOrigen(codigo)
    if (codigo === destino) setDestino('')
    setSeleccionado(null)
    setMensaje('')
  }

  function cambiarDestino(codigo) {
    setDestino(codigo)
    setSeleccionado(null)
    setMensaje('')
  }

  function seleccionarVuelo(vuelo) {
    setSeleccionado(vuelo)
    setMensaje('')
  }

  function agregarReserva(datos) {
    const nueva = {
      ...datos,
      id: globalThis.crypto?.randomUUID?.() ?? Date.now() + '-' + Math.random(),
      fecha: new Date().toISOString(),
    }
    setReservas((anteriores) => [...anteriores, nueva])
    setMensaje('Reserva registrada. Puedes verla en Mis reservas.')
  }

  function eliminarReserva(id) {
    setReservas((anteriores) => anteriores.filter((reserva) => reserva.id !== id))
    setMensaje('Reserva eliminada.')
  }

  return (
    <>
      <Header cantidad={reservas.length} />
      <main className="contenedor" id="inicio">
        <section className="portada" aria-labelledby="titulo">
          <div className="intro">
            <span className="mini-etiqueta">VUELOS NACIONALES · COLOMBIA</span>
            <h1 id="titulo">Tu vuelo en<br />un clic<span>.</span></h1>
            <p>Compara horarios y precios, elige tu vuelo y guarda tu reserva en un solo lugar.</p>
          </div>
          <svg className="ilustracion" viewBox="0 0 460 245" fill="none" aria-hidden="true">
            <circle cx="245" cy="107" r="137" stroke="#2e4b6b" />
            <circle cx="245" cy="107" r="100" stroke="#2e4b6b" />
            <circle cx="245" cy="107" r="65" stroke="#2e4b6b" />
            <path d="M35 185C105 176 111 61 245 93S343 205 432 43" stroke="#b8f0d6" strokeWidth="2" strokeDasharray="5 8" strokeLinecap="round" />
            <circle cx="35" cy="185" r="5" fill="#b8f0d6" />
            <circle cx="432" cy="43" r="5" fill="#b8f0d6" />
            <text x="54" y="206" fill="#a9bdce">BOG</text>
            <text x="393" y="27" fill="#a9bdce">MDE</text>
            <circle cx="245" cy="97" r="31" fill="#b8f0d6" />
            <path d="M259 83c-1.3-1.3-3.4-1.3-4.7 0l-5.7 5.7-13.2-3.3-2.3 2.3 10.5 6-6.1 6.1-5.4-.6-2 2 7.3 3.5 3.5 7.3 2-2-.6-5.4 6.1-6.1 6 10.5 2.3-2.3-3.3-13.2 5.7-5.7c1.3-1.3 1.3-3.4 0-4.8Z" fill="#142740" />
          </svg>
        </section>

        <div className="columnas">
          <section className="panel" id="buscar" aria-labelledby="titulo-buscar">
            <div className="cabecera-panel">
              <div><span className="mini-etiqueta">01 · RUTA</span><h2 id="titulo-buscar">Buscar vuelos</h2></div>
            </div>
            <SelectorRuta ciudades={CIUDADES} origen={origen} destino={destino}
              onOrigen={cambiarOrigen} onDestino={cambiarDestino} />
            <div className="orden">
              <label htmlFor="orden">Ordenar por</label>
              <select id="orden" value={orden} onChange={(evento) => setOrden(evento.target.value)}>
                <option value="precio-asc">Precio: menor a mayor</option>
                <option value="precio-desc">Precio: mayor a menor</option>
                <option value="hora">Hora de salida</option>
                <option value="avion">Avión (A–Z)</option>
              </select>
            </div>
            <ListaVuelos vuelos={vuelosOrdenados} nombreOrigen={nombreOrigen} nombreDestino={nombreDestino}
              idSeleccionado={seleccionado?.id} onSeleccionar={seleccionarVuelo} />
          </section>

          <section className="panel panel-reserva" aria-label="Formulario de reserva">
            <span className="mini-etiqueta">02 · RESERVA</span>
            {seleccionado ? (
              <FormularioReserva key={seleccionado.id} vuelo={seleccionado} onReservar={agregarReserva} />
            ) : (
              <div className="sin-seleccion">
                <span aria-hidden="true">✈</span>
                <h2>Elige un vuelo</h2>
                <p>Selecciona un vuelo de la lista para ver su detalle y reservar.</p>
              </div>
            )}
          </section>
        </div>

        <p className={mensaje ? 'mensaje' : 'mensaje oculto'} role="status">{mensaje}</p>
        <MisReservas reservas={reservas} onEliminar={eliminarReserva} />
      </main>
      <Footer />
    </>
  )
}
