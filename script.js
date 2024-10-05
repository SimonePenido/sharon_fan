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
