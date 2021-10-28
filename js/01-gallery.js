import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryImages = createGalleryImagesMarkup(galleryItems);


function createGalleryImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('')
};
gallery.insertAdjacentHTML('beforeend', galleryImages)


let originalImage;

gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    originalImage = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    originalImage.show()
});


 gallery.addEventListener('keydown', onEscKeyPress)

function onEscKeyPress(event) {
    if (event.code !== 'Escape') {
        return;
    }
    originalImage.close()
};

console.log(galleryItems);
