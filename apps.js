const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function transformarTexto(texto, encriptar = true) {
    return matrizCodigo.reduce((acc, [original, reemplazo]) => {
        const [buscar, reemplazar] = encriptar ? [original, reemplazo] : [reemplazo, original];
        return acc.replaceAll(buscar, reemplazar);
    }, texto.toLowerCase());
}

function btnEncriptar() {
    mensaje.value = transformarTexto(textArea.value, true);
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    mensaje.value = transformarTexto(textArea.value, false);
    textArea.value = "";
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    
}


function btnPegar() {
    navigator.clipboard.readText().then((text) => {
        textArea.value = text;
    }).catch(err => {
        alert("Error al pegar el texto: " + err);
    });
}

function btnLimpiar() {
    textArea.value = "";
    mensaje.value = "";
    mensaje.style.backgroundImage = ""; // Restaurar imagen de fondo si es necesario
}