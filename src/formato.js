const pesos = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 })
const fechas = new Intl.DateTimeFormat('es-CO', { dateStyle: 'medium', timeStyle: 'short' })

export function formatoPrecio(valor) {
  return '$ ' + pesos.format(valor)
}

export function formatoFecha(fecha) {
  return fechas.format(new Date(fecha))
}
