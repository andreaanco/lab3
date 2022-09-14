function convertir(){
    var valores = parseInt(document.getElementById("valor").value);
    var resultado =  0;
    var Dolar = 3.85;
    var Euro = 3.84;

    if(document.getElementById("uno").checked){
        resultado =valores /Dolar;
        alert("El cambio de Soles a Dolares es: $" +  resultado.toFixed(2));
    }
    else if(document.getElementById("dos").checked){
        resultado = valores / Euro;
        alert("El cambio de Soles  a Euros es: €" + resultado.toFixed(2));
    }
    else{
        alert("Tienes que llenar todos los espacios")
    }
}