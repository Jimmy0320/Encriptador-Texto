const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copyNotification = document.createElement("div");
copyNotification.className = "copy-notification";
document.body.appendChild(copyNotification);

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
    mostrarNotificacion("Texto copiado al portapapeles");
}

function mostrarNotificacion(mensaje) {
    copyNotification.textContent = mensaje;
    copyNotification.style.display = "block";
    setTimeout(() => {
        copyNotification.style.display = "none";
    }, 2000);
}
