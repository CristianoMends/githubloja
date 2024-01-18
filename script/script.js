function adicionarItemCarrinho(nome, preco, imagem) {
  var produto = {
    nome: nome,
    preco: preco,
    imagem: imagem
  };

  var carrinhoItens = JSON.parse(localStorage.getItem("carrinhoItens")) || [];
  carrinhoItens.push(produto);
  localStorage.setItem("carrinhoItens", JSON.stringify(carrinhoItens));

  atualizarNumeroCarrinho();
}

function atualizarNumeroCarrinho() {
  var carrinhoItens = JSON.parse(localStorage.getItem("carrinhoItens")) || [];
  var carrinhoSpan = document.getElementById("carrinho-span");
  carrinhoSpan.innerText = carrinhoItens.length;


}

window.addEventListener("load", function() {
  atualizarNumeroCarrinho();
});

function openTab(tabId) {
  const tabButtons = document.querySelectorAll('.tab-buttons button');
  const tabContents = document.querySelectorAll('.tab-content');

  // Remove a classe "active" dos botões e esconde todos os conteúdos das abas
  tabButtons.forEach(button => button.classList.remove('active'));
  tabContents.forEach(content => content.style.display = 'none');

  // Adiciona a classe "active" ao botão correspondente ao tabId e mostra o conteúdo da aba
  const selectedButton = document.querySelector(`.tab-buttons button[onclick="openTab('${tabId}')"]`);
  const selectedContent = document.getElementById(tabId);

  if (selectedButton && selectedContent) {
    selectedButton.classList.add('active');
    selectedContent.style.display = 'block';
  }
}

function changeImage(imagePath) {
  // Set the main image source to the clicked thumbnail's source
  document.getElementById('mainImage').src = imagePath;
}