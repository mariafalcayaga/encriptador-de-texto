document.getElementById("primerTexto").addEventListener("input", function() {
    let texto = this.value;
    texto = texto.toLowerCase();
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    this.value = texto;
});

function encriptar() {
    let primerTexto = document.getElementById("primerTexto").value;
    
    let textoEncriptado = primerTexto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("segundoTexto").value = textoEncriptado;
    verificarTexto();

    document.getElementById("primerTexto").value = "";
}

function desencriptar() {
    let primerTexto = document.getElementById("primerTexto").value;

    let textoDesencriptado = primerTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")
        .replace(/ai/g, "a");

    document.getElementById("segundoTexto").value = textoDesencriptado;
    verificarTexto();

    document.getElementById("primerTexto").value = "";

}

function copiarTexto() {
    let texto = document.getElementById("segundoTexto").value;

    navigator.clipboard.writeText(texto);
        
}

function verificarTexto() {
    let textarea = document.getElementById("segundoTexto");
    let superpuesto = document.getElementById("superpuesto");
    let boton = document.getElementById("btnCopiar");
   

    if (textarea.value.trim() === "") {
        superpuesto.style.display = "flex";
        boton.style.display = "none";

    } else {
        superpuesto.style.display = "none";
        boton.style.display = "block";
    }

} 

window.onload = function() {
    verificarTexto()
    document.getElementById("segundoTexto").addEventListener("input",verificarTexto);
}


    
