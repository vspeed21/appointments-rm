export function formatearFecha(fecha) {
  const newFecha = new Date(fecha);

  return newFecha.toLocaleDateString('es-ES', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
