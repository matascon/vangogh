import { ACCESS_KEY } from "../../../key/key.js";
import { mapImages } from "../../general/mapImages.js";

const getImagesForFootage = async () => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?count=20&client_id=${ACCESS_KEY}`);
    const dataJSON = await response.json();
    return dataJSON;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const showImages = (images) => {
  let index = 0;
  const image = document.querySelector('.footage');

  const mostrarImagen = () => {
    image.style.opacity = 0;

    setTimeout(() => {
      image.src = images[index].src;
      image.alt = images[index].alt;
      image.onload = () => {
      image.style.opacity = 1;
      };
      index++;
      if (index === images.length) {
          index = 0;
      }
      }, 1000);
  };

  mostrarImagen();
  setInterval(mostrarImagen, 3500);
};

export const footage = async () => {
  const divFootage = document.createElement('img');
  divFootage.className = 'footage';
  document.querySelector('.hello').appendChild(divFootage);
  let images = await getImagesForFootage();
  //let images = testing;
  if (!images) {
    document.querySelector('.footage').style.display = 'none';
    const errorMessage = document.createElement('p');
    errorMessage.innerText = 'Ocurrió un error en la petición a la API';
    const errorImage = document.createElement('img');
    errorImage.className = 'error-image';
    errorImage.src = '/icons/error_icon.png';
    errorImage.alt = 'Error Icon';
    document.querySelector('.hello').appendChild(errorImage);
    document.querySelector('.hello').appendChild(errorMessage);
  } else {
    images = mapImages(images, 'regular');
    showImages(images);
  }
};