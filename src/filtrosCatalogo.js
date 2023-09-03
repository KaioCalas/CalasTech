const catalogoProdutos = document.getElementById('container-produto1');

function exibirTodos() {
  const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));

  for(const produto of produtosEscondidos) {
    produto.classList.remove('hidden');
  }
}

function esconderDell() {
  exibirTodos();
  const produtosDell = Array.from(catalogoProdutos.getElementsByClassName('dell'));

  for(const produto of produtosDell) {
    produto.classList.add('hidden');
  }
}

function esconderLenovo() {
  exibirTodos();
  const produtosLenovo = Array.from(catalogoProdutos.getElementsByClassName('lenovo'));

  for(const produto of produtosLenovo) {
    produto.classList.add('hidden');
  }
}

export function inicializarFiltros() {
  document.getElementById('exibir-lenovo').addEventListener('click', esconderDell);
  document.getElementById('exibir-dell').addEventListener('click', esconderLenovo);
  document.getElementById('exibir-todos').addEventListener('click', exibirTodos);
}