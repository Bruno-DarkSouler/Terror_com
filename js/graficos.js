const ctx = document.getElementById('grafico_visitas');
new Chart(ctx, {
  type: 'line', // cambia a 'bar' para barras
  data: {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [{
      label: 'Visitas',
      data: [20000, 22000, 21000, 25000, 27000, 30000],
      borderColor: '#00A80C',      // color de la línea
      backgroundColor: '#00A80C', // relleno debajo de la línea
      borderWidth: 3,              // grosor de la línea
      pointBackgroundColor: '#2196f3', // color de los puntos
      pointBorderColor: '#000',    // borde de los puntos
      pointRadius: 6               // tamaño de los puntos
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: '#EAE6FF',           // color del texto de la leyenda
          font: { size: 14 }
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#00897b' }, // color de los números en eje X
        grid: { color: '#bbbbbbff' }   // color de las líneas de la grilla
      },
      y: {
        ticks: { color: '#d32f2f' }, // color de los números en eje Y
        grid: { color: '#bbbbbbff' }
      }
    }
  }
});


const generos = document.getElementById('generos');
new Chart(generos, {
  type: 'bar', // cambia a 'bar' para barras
  data: {
    labels: ['Terror Analógico', 'Terror Digital', 'Slasher', 'Psicológico', 'Monstruos', 'Metraje encontrado', 'Misterio', 'Zombis', 'Religioso'],
    datasets: [{
      label: 'Ventas',
      data: [20000, 10000, 25000, 20000, 21000, 7000, 11000, 23000, 27000],
      borderColor: '#ff5722',      // color de la línea
      backgroundColor: 'rgba(255, 87, 34, 0.2)', // relleno debajo de la línea
      borderWidth: 3,              // grosor de la línea
      pointBackgroundColor: '#2196f3', // color de los puntos
      pointBorderColor: '#000',    // borde de los puntos
      pointRadius: 6               // tamaño de los puntos
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: '#333',           // color del texto de la leyenda
          font: { size: 14 }
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#00897b' }, // color de los números en eje X
        grid: { color: '#e0e0e0' }   // color de las líneas de la grilla
      },
      y: {
        ticks: { color: '#d32f2f' }, // color de los números en eje Y
        grid: { color: '#e0e0e0' }
      }
    }
  }
});


const medios = document.getElementById('medios');
new Chart(medios, {
  type: 'bar', // cambia a 'bar' para barras
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [{
      label: 'Ventas',
      data: [12, 19, 3, 5],
      borderColor: '#ff5722',      // color de la línea
      backgroundColor: 'rgba(255, 87, 34, 0.2)', // relleno debajo de la línea
      borderWidth: 3,              // grosor de la línea
      pointBackgroundColor: '#2196f3', // color de los puntos
      pointBorderColor: '#000',    // borde de los puntos
      pointRadius: 6               // tamaño de los puntos
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: '#333',           // color del texto de la leyenda
          font: { size: 14 }
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#00897b' }, // color de los números en eje X
        grid: { color: '#e0e0e0' }   // color de las líneas de la grilla
      },
      y: {
        ticks: { color: '#d32f2f' }, // color de los números en eje Y
        grid: { color: '#e0e0e0' }
      }
    }
  }
});



const obras = document.getElementById('obras');
new Chart(obras, {
  type: 'bar', // cambia a 'bar' para barras
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [{
      label: 'Ventas',
      data: [12, 19, 3, 5],
      borderColor: '#ff5722',      // color de la línea
      backgroundColor: 'rgba(255, 87, 34, 0.2)', // relleno debajo de la línea
      borderWidth: 3,              // grosor de la línea
      pointBackgroundColor: '#2196f3', // color de los puntos
      pointBorderColor: '#000',    // borde de los puntos
      pointRadius: 6               // tamaño de los puntos
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: '#333',           // color del texto de la leyenda
          font: { size: 14 }
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#00897b' }, // color de los números en eje X
        grid: { color: '#e0e0e0' }   // color de las líneas de la grilla
      },
      y: {
        ticks: { color: '#d32f2f' }, // color de los números en eje Y
        grid: { color: '#e0e0e0' }
      }
    }
  }
});