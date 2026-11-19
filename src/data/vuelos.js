// Datos de práctica. El vuelo v4 coincide con el ejemplo del enunciado.
export const CIUDADES = [
  { codigo: 'BOG', nombre: 'Bogotá' },
  { codigo: 'MDE', nombre: 'Medellín' },
  { codigo: 'CLO', nombre: 'Cali' },
  { codigo: 'CTG', nombre: 'Cartagena' },
  { codigo: 'BAQ', nombre: 'Barranquilla' },
  { codigo: 'PEI', nombre: 'Pereira' },
]

export const VUELOS = [
  { id: 'v1', origen: 'BOG', destino: 'MDE', avion: 'Boeing 737', hora: '07:30', precio: 355000 },
  { id: 'v2', origen: 'BOG', destino: 'MDE', avion: 'Airbus A320', hora: '15:20', precio: 285000 },
  { id: 'v3', origen: 'BOG', destino: 'MDE', avion: 'Embraer E190', hora: '16:45', precio: 315000 },
  { id: 'v4', origen: 'MDE', destino: 'BOG', avion: 'ATR 72', hora: '09:05', precio: 260000 },
  { id: 'v5', origen: 'CLO', destino: 'CTG', avion: 'Airbus A319', hora: '13:10', precio: 390000 },
  { id: 'v6', origen: 'BAQ', destino: 'PEI', avion: 'ATR 72', hora: '18:25', precio: 330000 },
]

export const CLASES = [
  { id: 'economica', nombre: 'Económica', factor: 1 },
  { id: 'ejecutiva', nombre: 'Ejecutiva', factor: 1.6 },
  { id: 'primera', nombre: 'Primera', factor: 2.4 },
]
