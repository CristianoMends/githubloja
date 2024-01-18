function filtrarProdutos() {
    const select = document.querySelector("select");
    const tipoSelecionado = select.value;
    const produtos = document.querySelectorAll(".produto");

    produtos.forEach((produto) => {
      const tipoProduto = produto.getAttribute("data-tipo");

      if (tipoSelecionado === "1" || tipoSelecionado === tipoProduto) {
        produto.style.display = "block";
      } else {
        produto.style.display = "none";
      }
    });
  }

  const select = document.querySelector("select");
  select.addEventListener("change", filtrarProdutos);

  // Chamada inicial para exibir todos os produtos
  filtrarProdutos();