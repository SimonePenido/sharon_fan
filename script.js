const images = document.querySelectorAll('.galeria-container img');
let currentImageIndex;

function openImageInFullscreen(index) {
    const imageUrl = images[index].src;
    const overlay = document.createElement('div');
    overlay.id = 'overlay';

    const image = document.createElement('img');
    image.src = imageUrl;
    image.classList.add('fullscreen');

    const prevButton = document.createElement('button');
    prevButton.textContent = '◄';
    prevButton.classList.add('prev');
    prevButton.onclick = () => changeImage(index - 1);

    const nextButton = document.createElement('button');
    nextButton.textContent = '►';
    nextButton.classList.add('next');
    nextButton.onclick = () => changeImage(index + 1);

    overlay.appendChild(prevButton);
    overlay.appendChild(image);
    overlay.appendChild(nextButton);
    document.body.appendChild(overlay);

    overlay.onclick = () => document.body.removeChild(overlay);
    currentImageIndex = index;
}

function changeImage(newIndex) {
    if (newIndex < 0) {
        newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
        newIndex = 0;
    }

    const overlay = document.getElementById('overlay');
    const image = overlay.querySelector('img');
    image.src = images[newIndex].src;
    currentImageIndex = newIndex;
}

images.forEach((img, index) => {
    img.addEventListener('click', () => openImageInFullscreen(index));
});


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-gallery img');
    let currentImageIndex = 0;

    // Cria o container para a visualização em tela cheia
    const fullScreenContainer = document.createElement('div');
    fullScreenContainer.classList.add('fullscreen');
    document.body.appendChild(fullScreenContainer);

    const fullScreenImage = document.createElement('img');
    fullScreenContainer.appendChild(fullScreenImage);

    const prevButton = document.createElement('button');
    prevButton.textContent = '⟨';
    prevButton.classList.add('prev');
    fullScreenContainer.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = '⟩';
    nextButton.classList.add('next');
    fullScreenContainer.appendChild(nextButton);

    const closeButton = document.createElement('button');
    closeButton.textContent = '✖';
    closeButton.classList.add('close');
    fullScreenContainer.appendChild(closeButton);

    // Função para exibir a imagem em tela cheia
    function showImage(index) {
        currentImageIndex = index;
        fullScreenImage.src = images[currentImageIndex].src;
        fullScreenContainer.style.display = 'flex';
    }

    // Função para fechar a visualização em tela cheia
    function closeFullScreen() {
        fullScreenContainer.style.display = 'none';
    }

    // Eventos para abrir a imagem em tela cheia ao clicar
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            showImage(index);
        });
    });

    // Botão de fechar
    closeButton.addEventListener('click', closeFullScreen);

    // Botão "Anterior"
    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
        showImage(currentImageIndex);
    });

    // Botão "Próximo"
    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
        showImage(currentImageIndex);
    });
});
