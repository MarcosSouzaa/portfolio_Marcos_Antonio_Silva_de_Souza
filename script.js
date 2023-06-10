//vou incluir esse elemento no titulo, esse elemento represnta a letra
function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = ''; //vazio
    arrTexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.digitando');//meu seletor. Vou criar a função para chamá-lo
ativaLetra(titulo);
