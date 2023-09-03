export const catalogo = [
  {
    id: "1",
    dell: true,
    nome: 'Notebook Inspiron 15 3000',
    marca: 'Dell',
    preco: '3150',
    nomeArquivoImagem: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/inspiron-15-3511/media-gallery/in3511nt_cnb_05000ff090_bk-fpr.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500',
  },
  {
    id: "2",
    dell: true,
    nome: 'Notebook Vostro 3510',
    marca: 'Dell',
    preco: '2698',
    nomeArquivoImagem: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/15-3510/media-gallery/archive/dv3510nt_cnb_05000ff090_gy.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500',
  },
  {
    id: "3",
    nome: 'Notebook Gamer Dell G15',
    dell: true,
    marca: 'Dell',
    preco: '7398',
    nomeArquivoImagem: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5530/media-gallery/gray/non-touch/coral/notebook-laptop-g15-5530-gray-gallery-1-v2.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500',
  },
  {
    id: "4",
    nome: 'Notebook IdeaPad 3i (15" Intel)',
    dell: false,
    marca: 'Lenovo',
    preco: '1969',
    nomeArquivoImagem: 'https://www.lenovo.com/medias/88IPS301550.png?context=bWFzdGVyfHJvb3R8Mzg1NDY1fGltYWdlL3BuZ3xoMjMvaDkxLzE3MzYyNTI2NjY2NzgyLnBuZ3w1MjgzOTgxMjU5YjUyOWIzZmY4Y2I2YjA2YzViODJjM2UwZTA0OTNmZThhN2E5ZWI5MDY4NWY2NmJhZGZjYmZj',
  },
  {
    id: "5",
    nome: 'Notebook Lenovo V14 (14" Intel)',
    dell: false,
    marca: 'Lenovo',
    preco: '2699',
    nomeArquivoImagem: 'https://www.lenovo.com/medias/XXYTXVNI403.png?context=bWFzdGVyfHJvb3R8MjAxNTY5fGltYWdlL3BuZ3xoZDEvaGJlLzE3MzYyNTMxNjQ3NTE4LnBuZ3wzYzdhMjliOTk2NGE1NzE2N2ZhMDNmOThjMGM5NzQyMWFlYmNhYWI2NzhmNjA4ZjdhMzUxODBlNmVmZjY3MWM2',
  },
  {
    id: "6",
    nome: 'Notebook Gamer Legion Slim 7 (16" AMD)',
    dell: false,
    marca: 'Lenovo',
    preco: '13139',
    nomeArquivoImagem: 'https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MzIxODg0fGltYWdlL3BuZ3xoZmMvaDE0LzE0NDg3ODg4MTk5NzEwLnBuZ3w4Njk3Y2IxYzI1Y2RmZDBiNGI1ODJlMWM3ZWJhN2Q4NzA1YjI0ODk0NzQyZmYyYmNmMjk5MDhkNmU4ZTk4YTdh',
  }
]

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoNoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
  const produto = catalogo.find((p) => p.id === idProduto)
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement('article');
  const articleClasses = ['flex', 'bg-stone-200', 'rounded-lg', 'p-1', 'relative', 'mb-2', 'w-96']
  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass)
  }
  const cartaoProdutoCarrinho = `
      <img src="${produto.nomeArquivoImagem}" class="h-24" alt="notebook dell inspiron 15 3000" />
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">${produto.marca}</p>
        <p class="text-green-700 text-lg">R$${produto.preco}</p>
      </div>
      <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
        <p id="quantidade-${produto.id}"class="ml-2">${quantidadeProduto}</p>
      </div>
  `;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
