function criaCartao(categoria, pergunta, resposta){
let container = document.getElementById('container');
let cartao = document.createElement('article');
cartao.className = 'cartao';

cartao.innerHTML = `
 <div class="cartao_conteúdo">
            <h3>${categoria}</h3>
            <div class="categoria-pergunta-resposta">
                <p><${pergunta}/p>
            <div class="categoria-pergunta-resposta">
                <p>${resposta}</p>

            </div>
            </div>
        </div>`
    container.appendChild(cartao);
}