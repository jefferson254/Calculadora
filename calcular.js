//SCRIPT CONVERTIR BINARIO A ENTERO
function convertir_binario(valor){
    var array = [];
    var numeros = valor.split("");
    var entero = 0;
    var contador = 0;
    for(var i = numeros.length-1; i>=0;i--){
        if(numeros[i] == 0){
            array[i] = 0;
        }
        else{
            array[i] = Math.pow(2,contador);
        }
        contador++;
    }
    for(var a = 0; a < array.length; a++){
        entero += array[a];
    }
    return entero;
}

//SCRIPT CONVERTIR ENTERO A BINARIO
function convertir_entero(valor){
    var resul_div = [];
    var entradas = 0;
    var resultado_binario = '';
    while(valor > 0){
        residuo = parseInt(valor % 2);
        valor = parseInt(valor/2);
        resul_div[entradas] = residuo;
        entradas++;
    }
    for (var i = resul_div.length - 1; i >= 0; i--) {
        resultado_binario += resul_div[i];
    }
    return resultado_binario;
}


$(function(){
    $("#binario").keyup(function(){
        $("#entero").val(convertir_binario($(this).val()));
    });
    $("#decimal").keyup(function(){
        $("#entero_conv").val(convertir_entero($(this).val()));
    });
    $(".sumbin2").keyup(function(){
        $(".ressuma").val(suma_binarios($(this).val(),$(".sumbin1").val()));

    });
    $(".restabin2").keyup(function(){
        $(".restatotal").val(resta_binarios($(this).val(),$(".restabin").val()));

    });
});