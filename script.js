function escrevendoLetra() {
    //vou incluir esse elemento no titulo, esse elemento represnta a letra
    function ativaLetra(elemento) {/*Tirei a função de global*/
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
}
escrevendoLetra();

const ativaMenu = document.querySelector('.fa-bars');
ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x') //adiciona a terceira classe no documento e faz um X no click do menu
})