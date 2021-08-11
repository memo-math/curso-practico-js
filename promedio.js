const lista1=[100, 200, 300, 500];

function promedio(lista){
    let suma=0;
    for (let i=0; i<lista1.length; i++){
        suma += lista1[i];
    }
    const promedio = suma / lista1.length;
    return promedio;
}

//lo mismo pero con reduce aprender más de esta función
/* const sumaLista = lista.reduce(
    function(valorAcumluado=0, nuevoelemento){
        return valorAcumluado + nuevoelemento;
    }
); */
