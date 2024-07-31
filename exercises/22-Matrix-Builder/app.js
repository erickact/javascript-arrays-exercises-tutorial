// Your code here
function matrixBuilder(n) {
    let matrix = [];
    
    // Recorre el número de filas
    for (let i = 0; i < n; i++) {
      // Crea una nueva fila
      let row = [];
      
      // Recorre el número de columnas
      for (let j = 0; j < n; j++) {
        // Asigna un valor aleatorio (0 o 1) a cada elemento de la fila
        row.push(Math.floor(Math.random() * 2));
      }
      
      matrix.push(row);
    }
    
    return matrix;
  }


// Do not change anything from this line down
console.log(matrixBuilder(5))
