const lista1=[100, 200, 500, 800, 40000];
const lista2=[100, 200, 500, 600, 800, 40000];
const lista3=[2100, 700, 120, 0, 315, -900];
const lista4=[2100, 700, 0, 315, -900];

const mitaLista1 = lista1.length / 2;

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
//tambien se puede hacer con parseInt() pero esa defincion se me hace más intuitiva