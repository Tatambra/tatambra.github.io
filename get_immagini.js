// JavaScript per mostrare la galleria di immagini e nascondere i pulsanti

// Otteniamo gli elementi dai rispettivi ID
const showImagesSposoButton = document.getElementById('show-images-sposo');
const showImagesSposaButton = document.getElementById('show-images-sposa');
const imageGallery = document.getElementById('image-gallery');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const imageDisplay = document.getElementById('image-display');

// Array di URL delle immagini (aggiungi più link delle immagini qui)
const images = [
    'https://drive.google.com/uc?id=1wOvJgi3tVy2WARDLuxrnP7He5zSQgiYx',
    'https://drive.google.com/uc?id=11El0xKtFKDXadnNe-UhClQ5uGG43cfqw'
];
let currentImageIndex = 0;

// Funzione per mostrare l'immagine successiva
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageDisplay.src = images[currentImageIndex];
}

// Funzione per mostrare l'immagine precedente
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    imageDisplay.src = images[currentImageIndex];
}

// Funzione per nascondere i pulsanti e mostrare la galleria
function showImageGallery() {
    imageGallery.style.display = 'flex'; // Mostra la galleria
    showImagesSposoButton.style.display = 'none'; // Nascondi il bottone SPOSO
    showImagesSposaButton.style.display = 'none'; // Nascondi il bottone SPOSA
}

// Aggiungiamo gli event listener per i pulsanti
showImagesSposoButton.addEventListener('click', showImageGallery);
showImagesSposaButton.addEventListener('click', showImageGallery);

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPreviousImage);
