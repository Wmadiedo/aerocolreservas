export default function SelectCiudad({ id, etiqueta, ciudades, valor, onCambiar }) {
  return (
    <div className="campo">
      <label htmlFor={id}>{etiqueta}</label>
      <select id={id} value={valor} onChange={(evento) => onCambiar(evento.target.value)}>
        <option value="">Elige una ciudad</option>
        {ciudades.map((ciudad) => (
          <option key={ciudad.codigo} value={ciudad.codigo}>
            {ciudad.nombre} ({ciudad.codigo})
          </option>
        ))}
      </select>
    </div>
  )
}
