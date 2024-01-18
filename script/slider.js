const sliderImages = document.querySelector('.slider-images');
const sliderDots = document.querySelector('.slider-dots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const images = Array.from(sliderImages.children);
const dotCount = images.length;

// Cria as bolinhas
for (let i = 0; i < dotCount; i++) {
  const dot = document.createElement('span');
  dot.classList.add('slider-dot');
  sliderDots.appendChild(dot);
}

const dots = Array.from(sliderDots.children);

// Função para atualizar a classe ativa das bolinhas
function updateActiveDot(currentIndex) {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

let currentIndex = 0;

// Função para exibir a imagem atual
function showCurrentImage() {
  sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateActiveDot(currentIndex);
}

// Event listener para o botão anterior
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? (dotCount - 1) : (currentIndex - 1);
  showCurrentImage();
});

// Event listener para o próximo botão
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === dotCount - 1) ? 0 : (currentIndex + 1);
  showCurrentImage();
});

// Inicia o slider com a primeira imagem
showCurrentImage();