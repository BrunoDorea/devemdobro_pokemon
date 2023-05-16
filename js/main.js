const botaoAlterarTema = document.getElementById('botao-alterar-tema')
const body = document.querySelector('body')
const imagemBotaoAlterarTema = document.querySelector('.imagem-botao')

botaoAlterarTema.addEventListener('click', () => {
    const modoEscuroAtivado = body.classList.contains('modo-escuro')
    body.classList.toggle('modo-escuro')
    
    if(modoEscuroAtivado) {
        imagemBotaoAlterarTema.setAttribute('src', "./assets/sun.png")
    } else {
        imagemBotaoAlterarTema.setAttribute('src', "./assets/moon.png")
    }

})
