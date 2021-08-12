const salariosCol = colombia.map(
    function(person){
        return person.salary;
    }
);

/* const salariosColSorted = salariosCol.sort(
    function(a, b){
        return a-b;
    }
); */

function mediana(arreglo){
    let arregloOrdenado = arreglo.sort(function(a, b) {
        return a - b;
      });
    if (arreglo.length % 2 == 0){
        let primeraPosicionMediana = (arregloOrdenado.length / 2) - 1; //modificar indices porque se empieza a contar en 0
        let segundaPosicionMediana = (arregloOrdenado.length /2);
        let valorMediana = (arregloOrdenado[primeraPosicionMediana] + arregloOrdenado[segundaPosicionMediana]) / 2;
        return valorMediana
    }
    else{
        let posicionMediana = ((arregloOrdenado.length + 1) / 2) - 1; //se hizo -1 al indice por contar array en 0
        return arreglo[posicionMediana];
    }
}

//Calcular el top 10%. Enviar en un console.log mediana general y mediana top 10%

function top10(arreglo){
    let arregloOrdenado = arreglo.sort(function(a, b) {
        return a - b;
      });
      const spliceStart = (arregloOrdenado.length * 90) / 100;
      const spliceCount = arregloOrdenado.length - spliceStart;
      const salarioColTop10 = arregloOrdenado.splice(spliceStart, spliceCount);
      return salarioColTop10
}

const medianaGeneral = mediana(salariosCol);

const medianaTop10 = mediana(top10(salariosCol));

console.log({medianaGeneral, medianaTop10})