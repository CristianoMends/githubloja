document.addEventListener("DOMContentLoaded", function() {
  var carrinhoItens = JSON.parse(localStorage.getItem("carrinhoItens")) || [];

  var carrinhoDiv = document.getElementById("carrinho");
  var totalPrecoElement = document.getElementById("totalPreco");
  carrinhoDiv.innerHTML = ""; // Limpa o conteúdo do carrinho antes de exibir os itens

  if (carrinhoItens.length > 0) {
    var totalPreco = 0;

    carrinhoItens.forEach(function(produto, index) {
      var produtoDiv = document.createElement("div");
      produtoDiv.classList.add("produto");

      var imagem = document.createElement("img");
      imagem.src = produto.imagem;
      produtoDiv.appendChild(imagem);

      var infoDiv = document.createElement("div");

      var nome = document.createElement("h3");
      nome.innerText = produto.nome;
      infoDiv.appendChild(nome);

      var preco = document.createElement("p");
      preco.innerText = "R$ " + produto.preco.toFixed(2);
      infoDiv.appendChild(preco);

      var quantidade = document.createElement("input");
      quantidade.type = "number";
      quantidade.value = produto.quantidade || 1;
      quantidade.addEventListener("input", function() {
        produto.quantidade = parseInt(quantidade.value);
        localStorage.setItem("carrinhoItens", JSON.stringify(carrinhoItens));
        atualizarValorTotal();
      });
      infoDiv.appendChild(quantidade);
      // Estilizando o campo "Quantidade"
      quantidade.style.padding = "5px";
      quantidade.style.border = "1px solid #ccc";
      quantidade.style.borderRadius = "3px";

      var removerBtn = document.createElement("button");
      removerBtn.innerText = "Retirar";
      removerBtn.addEventListener("click", function() {
        carrinhoItens.splice(index, 1);
        localStorage.setItem("carrinhoItens", JSON.stringify(carrinhoItens));
        exibirCarrinho();
        atualizarValorTotal();
      });
      
      // Estilizando o botão "Retirar"
      removerBtn.style.backgroundColor = "red";
      removerBtn.style.color = "white";
      removerBtn.style.padding = "5px 10px";
      removerBtn.style.border = "none";
      removerBtn.style.borderRadius = "3px";
      removerBtn.style.cursor = "pointer";

      infoDiv.appendChild(removerBtn);

      produtoDiv.appendChild(infoDiv);
      carrinhoDiv.appendChild(produtoDiv);

      totalPreco += produto.preco * (produto.quantidade || 1);
    });

    totalPrecoElement.innerText = "Total do preço: R$ " + totalPreco.toFixed(2);
  } else {
    var mensagem = document.createElement("p");
    mensagem.innerText = "Nenhum produto no carrinho.";
    carrinhoDiv.appendChild(mensagem);
    totalPrecoElement.innerText = "";
  }
});

function exibirCarrinho() {
  var carrinhoDiv = document.getElementById("carrinho");
  carrinhoDiv.innerHTML = "";

  var totalPrecoElement = document.getElementById("totalPreco");
  var carrinhoItens = JSON.parse(localStorage.getItem("carrinhoItens")) || [];
  var totalPreco = 0;

  if (carrinhoItens.length > 0) {
    carrinhoItens.forEach(function(produto, index) {
      var produtoDiv = document.createElement("div");
      produtoDiv.classList.add("produto");

      var imagem = document.createElement("img");
      imagem.src = produto.imagem;
      produtoDiv.appendChild(imagem);

      var infoDiv = document.createElement("div");

      var nome = document.createElement("h3");
      nome.innerText = produto.nome;
      infoDiv.appendChild(nome);

      var preco = document.createElement("p");
      preco.innerText = "Preço: R$ " + produto.preco.toFixed(2);
      infoDiv.appendChild(preco);

      var quantidade = document.createElement("input");
      quantidade.type = "number";
      quantidade.value = produto.quantidade || 1;
      quantidade.addEventListener("input", function() {
        produto.quantidade = parseInt(quantidade.value);
        localStorage.setItem("carrinhoItens", JSON.stringify(carrinhoItens));
        atualizarValorTotal();
      });
      infoDiv.appendChild(quantidade);

      var removerBtn = document.createElement("button");
      removerBtn.innerText = "Retirar";
      removerBtn.addEventListener("click", function() {
        carrinhoItens.splice(index, 1);
        localStorage.setItem("carrinhoItens", JSON.stringify(carrinhoItens));
        exibirCarrinho();
        atualizarValorTotal();
      });
      // Estilizando o botão "Retirar"
      removerBtn.style.backgroundColor = "red";
      removerBtn.style.color = "white";
      removerBtn.style.padding = "5px 10px";
      removerBtn.style.border = "none";
      removerBtn.style.borderRadius = "3px";
      removerBtn.style.cursor = "pointer";

      infoDiv.appendChild(removerBtn);

      produtoDiv.appendChild(infoDiv);
      carrinhoDiv.appendChild(produtoDiv);

      totalPreco += produto.preco * (produto.quantidade || 1);
    });

    totalPrecoElement.innerText = "Total do preço: R$ " + totalPreco.toFixed(2);
  } else {
    var mensagem = document.createElement("p");
    mensagem.innerText = "Nenhum produto no carrinho.";
    carrinhoDiv.appendChild(mensagem);
    totalPrecoElement.innerText = "";
  }
}

function atualizarValorTotal() {
  var carrinhoItens = JSON.parse(localStorage.getItem("carrinhoItens")) || [];
  var totalPreco = 0;

  carrinhoItens.forEach(function(produto) {
    totalPreco += produto.preco * (produto.quantidade || 1);
  });

  var totalPrecoElement = document.getElementById("totalPreco");
  totalPrecoElement.innerText = "Total do preço: R$ " + totalPreco.toFixed(2);
}
