function mediaGeometrica(lista){
    let multiplicador = 1;
    lista.map(
        function(elemento){
            multiplicador *= elemento;
        }
    )
    const valorMediaGeometrica = Math.pow(multiplicador, 1/lista.length);

    return valorMediaGeometrica;
}