import { ACCESS_KEY } from '../../../key/key.js';
import { mapImages } from '../../general/mapImages.js';
import { picture } from '../../../components/Picture.js';
import { setButtonPages } from './setButtonPages.js';
import { findOutWordsSuggested, getSuggestionsFromGemini } from './generateSuggestions.js';

const printImages = async(images) => {
  const collageImages = document.querySelector('.collage-images');
  collageImages.innerHTML = '';
  for (const image of images) {
    const cardPicture = picture(image);
    setTimeout(() => {
      cardPicture.style.opacity = 1;
      cardPicture.style.transform = 'translateY(0)';
    }, 500);
    collageImages.appendChild(cardPicture);
  }
};

export const getImagesForCollage = async (dataQuery) => {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${dataQuery.text}&per_page=30&page=${dataQuery.page}&client_id=${ACCESS_KEY}`);
    const images = await response.json();
    if (images.total) {
      printImages(mapImages(images.results, 'regular'));
      dataQuery['totalPages'] = images.total_pages - 1;
      setButtonPages(dataQuery);
    } else {
      document.querySelector('.collage-images').style.display = 'none';
      document.querySelector('.pages-images').style.display = 'none';
      findOutWordsSuggested(await getSuggestionsFromGemini(dataQuery.text));
    }
  } catch (error) {
    document.querySelector('.pages-images').style.display = 'none';
    document.querySelector('.collage').className = 'collage-issue';
    document.querySelector('.collage-images').className = 'collage-images-error';
    const errorMessage = document.createElement('p');
    errorMessage.innerText = 'Ocurrió un error en la petición a la API';
    const errorImage = document.createElement('img');
    errorImage.className = 'error-image';
    errorImage.src = '/icons/error_icon.png';
    errorImage.alt = 'Error Icon';
    document.querySelector('.collage-images-error').appendChild(errorImage);
    document.querySelector('.collage-images-error').appendChild(errorMessage);
  }
};