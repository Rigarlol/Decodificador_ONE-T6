function criptografar() {
    let textoInserido = document.getElementById('texto').value;
    let textoResultado = document.getElementById('resultado');
    let copiar = document.getElementById('botaoCopiar');
    
    let textoMinusculo = textoInserido.toLowerCase();
    let textoCriptografado = textoMinusculo.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    if (textoInserido.trim() === '') {
        alert('Digite algum texto para ser criptografado')
        copiar.style.display = 'none'
        textoResultado.innerHTML = '';
    } else {
        textoResultado.innerHTML = textoCriptografado;
        copiar.style.display = 'block'
    }
}

function descriptografar() {
    let textoInserido = document.getElementById('texto').value;
    let textoResultado = document.getElementById('resultado');
    let copiar = document.getElementById('botaoCopiar');

    let textoMinusculo = textoInserido.toLowerCase();
    let textoDescriptografado = textoMinusculo.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    if (textoInserido.trim() === '') {
        alert('Digite algum texto para ser descriptografado');
        copiar.style.display = 'none';
        textoResultado.innerHTML = '';
    } else {
        textoResultado.innerHTML = textoDescriptografado;
        copiar.style.display = 'block';
    }
}

function copiar() {
    let textoResultado = document.getElementById('resultado');
    textoResultado.select();
    navigator.clipboard.writeText(textoResultado.value)
    window.getSelection().removeAllRanges();   
}

