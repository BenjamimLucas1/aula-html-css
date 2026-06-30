const form = document.getElementById('filmeForm');
const listaFilmes = document.getElementById('listaFilmes');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nomeFilme').value.trim();
    const genero = document.getElementById('genero').value.trim();
    const ano = document.getElementById('ano').value.trim();
    if (nome === '' || genero === '' || ano === '') {
        alert('Preencha todos os campos!');
        return;
    }
    const card = document.createElement('div');
    card.className = 'movie-card clearfix';
    card.innerHTML = `
                <p class="movie-info">Nome do filme: <strong>${nome}</strong></p>
                <p class="movie-info">Gênero do filme: ${genero}</p>
                <p class="movie-info">Ano do lançamento do filme : ${ano}</p>
                <button class="btn-delete">Excluir</button>
            `;

    const btnExcluir = card.querySelector('.btn-delete');
    btnExcluir.addEventListener('click', function () {
        card.remove();
    });
    listaFilmes.appendChild(card);
    form.reset();
    document.getElementById('nomeFilme').focus();
});

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});