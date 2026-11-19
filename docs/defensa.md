# Guía para la defensa (5–7 min)

1. **Introducción (30 s).** Es una app de práctica para buscar vuelos nacionales, elegir uno y guardar reservas en el navegador.
2. **Búsqueda y catálogo (1 min).** En Bogotá → Medellín muestra tres vuelos. Cambia el orden por precio y por hora. Cambia a Medellín → Bogotá y muestra que el criterio de orden se mantiene. Si quieres mostrar una ruta vacía, prueba Medellín → Cali.
3. **Reserva (1 min).** En Medellín → Bogotá selecciona el ATR 72 de las 09:05. Muestra que el botón está deshabilitado sin nombre. Escribe Ana García, pon dos pasajeros y elige Ejecutiva. Explica en pantalla el total: 260.000 × 2 × 1,6 = 832.000 COP.
4. **Persistencia (1 min).** Pulsa Reservar. Muestra la fecha y el monto, recarga, verifica que siga y luego elimina la reserva. Vuelve a recargar para mostrar que la eliminación también se guarda.
5. **Explicación del código (2 min).** Abre `App.jsx` y `FormularioReserva.jsx`. Muestra qué estado se comparte y qué datos se quedan en el formulario. Explica cómo pasa `onSeleccionar` a la tarjeta y cómo se guarda el array sin modificarlo directamente.

## Para practicar las preguntas

- **¿Por qué el total no es un estado separado?** Lo puedo volver a calcular con los datos que ya tengo. Si lo guardo aparte, me arriesgo a mostrar un monto viejo después de cambiar la clase.
- **¿Qué pasa si uso `push`?** Cambia el mismo array y React puede no detectar una referencia nueva. Uso spread para crear el nuevo y `filter` para quitar una reserva sin tocar la lista anterior.
- **¿Cómo añadiría fecha de viaje?** Pondría un input de fecha controlado en el formulario, lo validaría y guardaría `fechaViaje` como campo aparte. `fecha` sigue siendo el momento de la reserva. Mostraría la nueva fecha en `MisReservas`.
- **¿Dónde busco si algo falla?** Primero repito el paso exacto y reviso la consola. Si no se actualiza el total, reviso los datos del formulario y los factores. Si una reserva desaparece al recargar, reviso si la clave `aerocol-reservas` quedó guardada en el almacenamiento local del mismo sitio y puerto.
