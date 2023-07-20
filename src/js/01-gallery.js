// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(galleryItems);
console.log(SimpleLightbox);

const list = document.querySelector(".gallery");


function createMarkup(arr) {
    return arr.map(({preview,original,description})=>`
    
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>
    `
    ).join('')
}

list.insertAdjacentHTML('afterbegin', createMarkup(galleryItems))



var lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250,})