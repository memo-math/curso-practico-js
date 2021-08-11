const lista=[1,1,1,1,1,1,4,4,4,4,4,2,2,2,2,3,0]

function moda(lista){
    const listaCount = {};

    lista.map(
        function (elemento){
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            }
            else{
                listaCount[elemento] = 1;
            }
        }
    );

    const listaarray = Object.entries(listaCount).sort(
        function (a, b){
            return a[1] - b[1];
        }
    );
    
    const moda = listaarray[listaarray.length - 1][0];

    return moda

}





