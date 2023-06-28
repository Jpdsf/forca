let tentativa = document.querySelector('#tentar-alternativa')
let palavraTamanho = document.querySelector('.palavra')
let jogo = document.querySelector('.jogo')
let comecar = document.querySelector('#comecar')
let play = document.querySelector('#play')
let info = document.querySelector('.info')
let tentativasAparecer = document.querySelector('#tentativas')
let chance = document.querySelector('#chances')
let modoExibir = document.querySelector('.modos')

function player(){
    comecar.classList.add('invisivel')
    info.classList.remove('invisivel')
}

function forca(){
    player()
    
    let modo = document.querySelector('#modo').value
    modoExibir.innerHTML = `Sua palavra é do tipo: ${modo}`

    let filmes = ['Valente', 'Cinderela', 'Hulk', 'Mario', 'Divertidamente', 'Carros', 'Avatar', 'Vingadores', 'Panico']
    let comida = ['STROGONOF', 'Brigadeiro', 'Coxinha', 'Pizza', 'Hamburguer', 'MilkShake', 'Fricasse', 'Macarronada', 'Feijoada']
    let objeto = ['Computador', 'Regua', 'Lapis', 'Caderno', 'Apontador', 'Envelope', 'Teclado', 'Pincel', 'Estojo']



    let chances = 6
    let letrasPalavra = []
    let exibir = []
    let acertos = []
    let tentativas = []
    let palavra = ''

    if (modo == 'comida'){
        palavra = (comida[Math.floor(Math.random() * comida.length)]).toLowerCase();
    }
    else if(modo == 'objeto'){
        palavra = (objeto[Math.floor(Math.random() * objeto.length)]).toLowerCase();
    }
    else if(modo == 'filmes')
        palavra = (filmes[Math.floor(Math.random() * filmes.length)]).toLowerCase();

    let tamanho = ''
    for (let i = 0; i < palavra.length; i++) {
        tamanho += '_ '
        exibir.push('_')
    }
    console.log(tamanho)
    palavraTamanho.innerHTML = `${tamanho}`


    for (let p in palavra) {
        letrasPalavra.push(palavra[p])
    }

    tentativa.addEventListener('click', function(){

    let tem = false
    let letra = document.querySelector('#informacoes-tentativa').value
    for (l = 0; l < letrasPalavra.length; l++) {
        if (letra == letrasPalavra[l]) {
            tem = true
        }
    }

    if (tem == true) {
        if (acertos.includes(letra)) {
            console.log('Ja foi digitada')
        }
        else {
            console.log('Letra adicionada com sucesso!')
            acertos.push(letra)
            tentativas.push(letra)
        }
    }
    else {
        tentativas.push(letra)
        console.log('A letra não tem')
        chances -= 1
    }

    for (a = 0; a < acertos.length; a++) {
        let contador = 0
        for (p = 0; p < letrasPalavra.length; p++) {
            if (acertos[a] == letrasPalavra[p]) {
                exibir[contador] = acertos[a]
            }
            contador += 1
        }
    }
    palavraTamanho.innerHTML = `${exibir.join(' ')}`
    tentativasAparecer.innerHTML = `Tentativas : [${tentativas}]`
    chance.innerHTML = `Chances: ${chances}`

    let set = new Set(palavra)
    document.querySelector('#informacoes-tentativa').value = ''
    if (set.size == acertos.length) {
        console.log('Parabens, voce ganhou!')
        jogo.innerHTML = `Parabéns você ganhou<br>`

    }

    if (chances == 0) {
        jogo.innerHTML = `Acabou suas chances, a palavra era: ${palavra}`
    }
})


}




