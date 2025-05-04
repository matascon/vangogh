import { downloadImage } from '../utils/components/picture/downloadImage';
import './Picture.css';

export const picture = (image) => {
  const cardPicture = document.createElement('div');
  cardPicture.className = 'picture';
  cardPicture.style.opacity = 0;
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;
  cardPicture.appendChild(img);
  const button = document.createElement('button');
  button.className = 'download';
  const icon = document.createElement('img');
  icon.src = '/icons/download_icon.png'
  icon.alt = 'Download Button'
  button.appendChild(icon);
  button.addEventListener("click", () => {
    downloadImage(image);
  });
  cardPicture.appendChild(button);

  return cardPicture;
};