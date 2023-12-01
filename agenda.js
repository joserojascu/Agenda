
async function getTotalEspaciosDisponibles(diaConsulta) {
  try {
    // Obtener el JSON desde la URL proporcionada
    const response = await fetch('https://luegopago.blob.core.windows.net/luegopago-uploads/Pruebas%20LuegoPago/data.json');
    const data = await response.json();

    // Filtrar citas para el día de la semana especificado y que este en el rango de 9 a 17
    const citasDia = data.filter(cita => cita.Day.toLowerCase() === diaConsulta.toLowerCase()  &&
    parseInt(cita.Hour.split(':')[0]) >= 9 && 
    parseInt(cita.Hour.split(':')[0]) <= 16 ); 

    // Calcular el total de minutos ocupados para ese día
    let minutosOcupados = 0;
    citasDia.forEach(cita => {
      const duracion = parseInt(cita.Duration);
      minutosOcupados += duracion;
    });

    // Calcular el total de espacios disponibles para ese día
    const minutosDisponibles = 480 - minutosOcupados; // 480 minutos = (17:00 - 9:00) * 60

    // Calcular el total de espacios disponibles considerando la duración mínima de cita (30 minutos)
    const espaciosDisponibles = Math.floor(minutosDisponibles / 30);

    return espaciosDisponibles;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return 0;
  }
}

// Uso del método para obtener los espacios disponibles para un día específico (por ejemplo, "martes")
const diaConsulta = "martes";
getTotalEspaciosDisponibles(diaConsulta)
  .then(total => {
    console.log(`Total de espacios disponibles para ${diaConsulta}: ${total}`);
  })
  .catch(err => {
    console.error('Error:', err);
  });