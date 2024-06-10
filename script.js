// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('/restaurantes')
    .then(response => response.json())
    .then(data => {
        const restaurantesContainer = document.getElementById('restaurantes');
        data.forEach(restaurante => {
            const restauranteDiv = document.createElement('div');
            restauranteDiv.classList.add('restaurante');
            restauranteDiv.innerHTML = `
                <h3>${restaurante.nome}</h3>
                <p>Localização: ${restaurante.localizacao}</p>
                <p>Cardápio:</p>
                <ul>
                    ${restaurante.cardapio.map(item => `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`).join('')}
                </ul>
            `;
            restaurantesContainer.appendChild(restauranteDiv);
        });
    })
    .catch(error => console.error('Erro ao buscar restaurantes:', error));
});