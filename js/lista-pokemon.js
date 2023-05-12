const pokemonList = document.getElementById('lista-pokemon')
const loadMoreButton = document.getElementById('carregarMaisBotao')

const maxRecords = 905
const limit = 10
let offset = 0

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="cartao-pokemon">
            <div class="informacoes">
            <span>${pokemon.name}</span>
            <span>nº ${pokemon.number}</span>
            </div>

            <img src="${pokemon.photo}" alt="imagem do bulbasaur" class="gif">

            <ul class="tipos">
                ${pokemon.types.map((type) => `<li class="tipo ">${type}</li>`).join('')}
            </ul>

            <p class="descricao">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, quibusdam?</p>

        </li>
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordWithNextPage = offset + limit

    if (qtdRecordWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        
        loadMoreButton.parentElement.removeChild(loadMoreButton)

    } else {
    loadPokemonItens(offset, limit)
    }
})