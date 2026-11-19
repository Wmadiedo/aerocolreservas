import SelectCiudad from './SelectCiudad.jsx'

export default function SelectorRuta({ ciudades, origen, destino, onOrigen, onDestino }) {
  return (
    <div className="filtros">
      <SelectCiudad id="origen" etiqueta="Origen" ciudades={ciudades} valor={origen} onCambiar={onOrigen} />
      <span className="flecha-ruta" aria-hidden="true">→</span>
      <SelectCiudad
        id="destino"
        etiqueta="Destino"
        ciudades={ciudades.filter((ciudad) => ciudad.codigo !== origen)}
        valor={destino}
        onCambiar={onDestino}
      />
    </div>
  )
}
