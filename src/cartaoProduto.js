import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades"

export function renderizarCatalogo() {
  for ( const produtoCatalogo of catalogo) {
    const cartaoProduto = `
    <div class="w-64 m-2 shadow-xl shadow-slate-400 transition flex flex-col p-2 justify-between rounded-lg group ${produtoCatalogo.dell ? 'dell' : 'lenovo'}" id="card-produto-${produtoCatalogo.id}">
      <img src="${produtoCatalogo.nomeArquivoImagem}" class="group-hover:scale-110 ease-in duration-300 my-3" alt="" />
      <p class="text-sm">${produtoCatalogo.marca}</p>
      <p class="text-sm">${produtoCatalogo.nome}</p>
      <p class="text-sm">R$${produtoCatalogo.preco}</p>
      <button id='adicionar-${produtoCatalogo.id}' class="bg-slate-950 text-slate-200 hover:bg-slate-700 active:bg-lemon-700">
      <i class="fa-solid fa-cart-plus"></i>
      </button>
    </div>
    `
    document.getElementById('container-produto1').innerHTML += cartaoProduto;
    document.getElementById(`adicionar-${produtoCatalogo}`)
  }  
   
  for (const produtoCatalogo of catalogo) {
    document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}
