const entradaUsuario = document.getElementById('entradaUsuario');
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');
const textbox = document.getElementById('textbox');

const encriptar = (texto) => {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
};

const desencriptar = (texto) => {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
};

const copiarAlPortapapeles = (texto) => {
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
};

const mostrarTexto = (texto) => {
    textbox.innerHTML = `<p>${texto}</p><button class="boton_3" id="copiar">Copiar</button>`;
    const botonCopiar = document.getElementById('copiar');
    botonCopiar.addEventListener('click', () => {
        copiarAlPortapapeles(texto);
    });
};

botonEncriptar.addEventListener('click', () => {
    const texto = entradaUsuario.value;
    const textoEncriptado = encriptar(texto);
    mostrarTexto(textoEncriptado);
});

botonDesencriptar.addEventListener('click', () => {
    const texto = entradaUsuario.value;
    const textoDesencriptado = desencriptar(texto);
    mostrarTexto(textoDesencriptado);
});
