/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function verificar(){
    var texto = document.getElementById("inputTexto").value
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
    if (texto.includes(caracteres,0) || texto.includes(mayusculas,0)){
        alert("No se permiten mayúsculas y simbolos, por favor ingrese un texto en minúsculas")
    }

    if (texto.includes(vacio)) {
        alert("Por favor ingrese el texto que desea encriptar o desencriptar");
    }
}


function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
    var txtCifrado= texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("dibujo").style.display = "none";
    document.getElementById("textoImagen").style.display = "none";
    document.getElementById("textoImagen2").style.display = "none";
    document.getElementById("textoEncriptado").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
    

    document.getElementById("dibujo").style.display = "none"
    document.getElementById("textoImagen").style.display = "none";
    document.getElementById("textoImagen2").style.display = "none";
    document.getElementById("textoEncriptado").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
    var aux = document.querySelector("#textoEncriptado");
    aux.select();
    document.execCommand("copy");
    alert("Copiado!");
}