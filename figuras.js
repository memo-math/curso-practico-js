//código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}


function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//código del triángulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}


function areaTriangulo(lado1, lado2, lado3){
    const semiperimetro = (lado1 + lado2 + lado3) / 2
    return Math.sqrt(semiperimetro * (semiperimetro-lado1) * (semiperimetro-lado2) * (semiperimetro-lado3));
}
console.groupEnd();

//Código del círculo

console.group("Círculos");

function perimetroCirculo(radio){
    return 2 * radio * Math.PI;
}

function areaCirculo(radio){
    return Math.PI * radio * radio;
}



console.groupEnd();

//Aquí interactuamos con el HTML
//Funciones para el cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro=perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area=areaCuadrado(value);
    alert(area);
}


//Funciones para el circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

//Funciones para el triángulo

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("Inputlado1");
    const lado2 = document.getElementById("Inputlado2");
    const lado3 = document.getElementById("Inputlado3");

    const lado1Number = parseFloat(lado1.value);
    const lado2Number = parseFloat(lado2.value);
    const lado3Number = parseFloat(lado3.value);

    const perimetro = perimetroTriangulo(lado1Number, lado2Number, lado3Number);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const lado1 = document.getElementById("Inputlado1");
    const lado2 = document.getElementById("Inputlado2");
    const lado3 = document.getElementById("Inputlado3");

    const lado1Number = parseFloat(lado1.value);
    const lado2Number = parseFloat(lado2.value);
    const lado3Number = parseFloat(lado3.value);

    const area = areaTriangulo(lado1Number, lado2Number, lado3Number);
    alert(area);
}

//Logica para la altura del triángulo isósceles

function calcularAlturaIsosceles(){
    const ladoA = document.getElementById("InputladoA");
    const ladoB = document.getElementById("InputladoB");
    const ladoBase = document.getElementById("InputladoBase");

/*     const lado1Number = parseFloat(lado1.value);
    const lado2Number = parseFloat(lado2.value);
    const lado3Number = parseFloat(lado3.value); */

    const mensaje="No ingresaste un triangulo isosceles"
    
    if (ladoA.value != ladoB.value){
        alert(mensaje)
    }
    else{
        const altura = (Math.sqrt(4 * (ladoA.value * ladoA.value) - (ladoBase.value *ladoBase.value))) 
        * 0.5
        alert(altura)
    }
}