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

function menuMobile() {
    const ativaMenu = document.querySelector('.fa-bars'); //vou no documento buscar o seletor
    const navMenu = document.querySelector('header .navegacao-primaria');//no nosso header vamos pegar a navegação primária


    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x') //adiciona a terceira classe no documento e faz um X no click do menu
        navMenu.classList.toggle('ativado')//quando eu clicar no menu o navMenu ativa classe da tag que é incluida fa-x
    });
}
menuMobile();

function sobreMim() {

    const divExperiencia = document.querySelectorAll('.experiencia_conteudo div');
    const liExperiencia = document.querySelectorAll('.experiencia_conteudo ul li');
    const divEducacao = document.querySelectorAll('.educacao_conteudo div');
    const liEducacao = document.querySelectorAll('.educacao_conteudo ul li');

    divExperiencia[0].classList.add('ativo');
    divEducacao[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    liEducacao[0].classList.add('ativo');

    function slideShow(index) {
        divExperiencia.forEach((div) => { /*o loop forEach vai passar por cada div*/
            div.classList.remove('ativo')/*Vai remover a class ativa*/
        });

        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShow2(index) {
        divEducacao.forEach((div) => { /*o loop forEach vai passar por cada div*/
            div.classList.remove('ativo')/*Vai remover a class ativa*/
        });

        liEducacao.forEach((botao) => {
            div.classList.remove('ativo')
        });
        divEducacao[index].classList.add('ativo');
        liEducacao[index].classList.add('ativo');
    }
    /*Click dos botões*/
    liExperiencia.forEach((event, index) => { /*ao clicar no evento click, quero que ele faça algo*/
        event.addEventListener('click', () => {
            slideShow(index)
        });
    });

    /*Click dos botões*/
    liEducacao.forEach((event, index) => { /*ao clicar no evento click, quero que ele faça algo*/
        event.addEventListener('click', () => {
            slideShow2(index)
        });
    });
}

/*Ativando a Função_ Daqui vou para o CSS */
sobreMim();