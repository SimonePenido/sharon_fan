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
