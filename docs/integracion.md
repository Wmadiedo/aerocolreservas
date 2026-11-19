# Cómo integrar los cambios en la base de clase

Esta copia funciona por sí sola para revisar la solución. Para respetar la entrega en dos momentos, parte de tu carpeta original de la semana 14.

1. Crea un repo público llamado `aerocol-reservas` en GitHub. Sube el proyecto de la semana 14 como primer commit, sin `node_modules` ni `dist`.
2. Conserva tus `CIUDADES` y `VUELOS` originales. Agrega solo `CLASES` a tu archivo de datos. Conserva también la lógica que ya funciona para escoger y filtrar por ruta.
3. Copia `FormularioReserva.jsx`, `MisReservas.jsx` y `formato.js`. En `ListaVuelos` y `TarjetaVuelo`, incorpora las props de selección. En `App`, agrega selección, orden y persistencia. Usa el árbol de `fase-1.md` para revisar las props.
4. Si tu base tenía otros estilos, conserva los que necesites e incorpora las reglas para el formulario, la tarjeta seleccionada y la lista de reservas. Adapta el README y el análisis a cómo quede tu código.
5. Ejecuta `npm run lint`, `npm run build` y revisa la reserva de $ 832.000 COP. Sube los cambios en un segundo commit y comparte el enlace del repositorio en la plataforma.

Si los componentes de tu base reciben props con otros nombres, conserva esos nombres y ajusta las llamadas nuevas. Si usaste otro formato de ciudad, elige el campo de identificación que ya tiene tu catálogo.
