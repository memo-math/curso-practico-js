/* Crearemos nuestra base de cupones que se pueden usar en la página web */

const coupons=["JavaScript", "Python", "CSS"];


function CalcularPrecioConDescuento(precio, descuento){
    porcentajePrecioConDescuento = 100 - descuento;
    precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

function onClickPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const inputCoupon = document.getElementById("InputCoupon");

    const priceValue = parseInt(inputPrice.value);
    const discountValue = parseInt(inputDiscount.value);
    const couponValue = inputCoupon.value;

    let descuento = 0;

    if (!coupons.includes(couponValue)){
        descuento = 0;
        alert("El cupón no es válido")
    }
    else if(couponValue === "JavaScript"){
        descuento = 5;
    }
    else if(couponValue === "Python"){
        descuento = 50;
    }
    else if(couponValue === "CSS"){
        descuento = 10;
    }

/* verificar casos parece que se arreglo */
    const totalDiscount = discountValue + descuento;

    alert(totalDiscount)


    const sellPrice = CalcularPrecioConDescuento(priceValue, totalDiscount)
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento es " + sellPrice;
}


